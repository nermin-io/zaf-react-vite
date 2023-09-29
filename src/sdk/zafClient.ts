interface IMetadata<T> {
  appId: number;
  installationId: number;
  name: string;
  plan: {
    name: string;
  };
  settings?: T;
}

interface IClient {
  invoke: <T>(cmd: string, arg: T) => void;
  get: <T>(getter: string) => T;
  metadata: <U>() => IMetadata<U>;
  request: <U>(data: Record<string, unknown>) => Promise<U>;
  on: (eventName: string, listener: (...args: unknown[]) => unknown) => void;
}

declare global {
  interface Window {
    ZAFClient: {
      init: () => IClient;
    };
  }
}

let zafClient: IClient;
if (typeof window.ZAFClient === "undefined") {
  throw new Error("ZAFClient cannot run outside Zendesk");
} else {
  zafClient = window.ZAFClient.init();
}

export { zafClient };
