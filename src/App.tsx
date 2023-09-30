import { ResizeHandle } from "./components/handles.ts";
import { useResizeableContainer } from "./hooks/useAdjustableHeight.ts";

function App() {
  const { register } = useResizeableContainer({
    defaultHeight: 500,
    maxHeight: 1000,
  });

  return (
    <div>
      <ResizeHandle {...register()} />
    </div>
  );
}

export default App;
