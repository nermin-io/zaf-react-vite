import { viteStaticCopy } from "vite-plugin-static-copy";

interface AppLocation {
  [key: string]: { url: string; flexible?: boolean } | string;
}

interface Manifest {
  name: string;
  author: {
    name: string;
    email: string;
    website?: string;
  };
  defaultLocale: string;
  private: boolean;
  location: Record<string, AppLocation>;
}

function replaceWithStaticUrl(url: string) {
  const staticUrl = url.replace(/http:\/\/localhost:[0-9]+\/?/g, "assets/");

  if (staticUrl === "assets/") {
    return staticUrl + "index.html";
  }

  return staticUrl + ".html";
}

function transformManifest(contents: string, filename: string): string {
  if (filename.endsWith("manifest.json")) {
    const manifest: Manifest = JSON.parse(contents);

    const location = Object.entries(manifest.location).map(
      ([product, locations]) => {
        const productLocations = Object.entries(locations).map(
          ([key, value]) => {
            if (typeof value === "object" && value.url) {
              return [key, { ...value, url: replaceWithStaticUrl(value.url) }];
            }

            if (typeof value === "string") {
              return [key, replaceWithStaticUrl(value)];
            }

            return [key, value];
          }
        );

        return [product, Object.fromEntries(productLocations)];
      }
    );

    const transformedManifest = {
      ...manifest,
      location: Object.fromEntries(location),
    };

    return JSON.stringify(transformedManifest, null, 2);
  }

  return contents;
}

export function zendeskPlugin() {
  return viteStaticCopy({
    targets: [
      {
        src: "src/assets/*",
        dest: ".",
      },
      {
        src: "src/manifest.json",
        dest: "../",
        transform: transformManifest,
      },
      {
        src: "src/translations/*",
        dest: "../translations",
      },
      {
        src: "README.md",
        dest: "../",
      },
      {
        src: "src/zcli.apps.config.json",
        dest: "../",
      },
      {
        src: "src/requirements.json",
        dest: "../",
      },
    ],
  });
}
