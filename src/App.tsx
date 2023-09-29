import { useEffect } from "react";
import { zafClient } from "./sdk/zafClient.ts";
import { Button } from "@zendeskgarden/react-buttons";

function App() {
  useEffect(() => {
    zafClient.invoke("resize", { height: "400px", width: "100%" });
  }, []);

  return (
    <Button
      isPrimary
      isStretched
      onClick={() => zafClient.invoke("routeTo", "ticket", "new")}
    >
      Create new ticket
    </Button>
  );
}

export default App;
