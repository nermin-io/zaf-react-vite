import { useEffect } from "react";
import { zafClient } from "./sdk/zafClient.ts";

function App() {
  useEffect(() => {
    zafClient.invoke("resize", { height: "400px", width: "100%" });
  }, []);
  return <div>Hello Zendesk</div>;
}

export default App;
