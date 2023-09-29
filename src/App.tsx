import { useEffect } from "react";
import { zafClient } from "./sdk/zafClient.ts";
import { Button } from "@zendeskgarden/react-buttons";

function App() {
  useEffect(() => {
    zafClient.invoke("resize", { height: "500px", width: "100%" });
  }, []);

  return (
    <div>
      <Button
        isPrimary
        isStretched
        onClick={() => zafClient.invoke("routeTo", "ticket", "new")}
      >
        Create Ticket
      </Button>
    </div>
  );
}

export default App;
