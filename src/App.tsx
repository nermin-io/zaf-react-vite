import { useResizeContainer } from "./hooks/useResizeContainer.ts";
import { useAdjustableHeight } from "./hooks/useAdjustableHeight.ts";
import { ResizeHandle } from "./components/handles.ts";
import { useQuery } from "@tanstack/react-query";
import { getTicket } from "./lib/zendesk/api.ts";

function App() {
  const { height, register } = useAdjustableHeight({
    initial: 500,
    maxHeight: 1000,
  });
  useResizeContainer({ height: height, width: "100%" });

  const { data, isLoading } = useQuery({
    queryKey: ["get-ticket"],
    queryFn: getTicket,
  });

  return (
    <div>
      {!isLoading && <div>Subject: {data?.ticket.subject}</div>}
      <ResizeHandle {...register()} />
    </div>
  );
}

export default App;
