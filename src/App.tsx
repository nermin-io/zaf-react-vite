import {
  Combobox,
  Field,
  Label,
  Option,
} from "@zendeskgarden/react-dropdowns.next";
import { useResizeContainer } from "./hooks/useResizeContainer.ts";
import { useAdjustableHeight } from "./hooks/useAdjustableHeight.ts";
import { ResizeHandle } from "./components/handles.ts";

function App() {
  const { height, register } = useAdjustableHeight({
    initial: 500,
    maxHeight: 1000,
  });
  useResizeContainer({ height: height, width: "100%" });

  return (
    <div>
      <Field>
        <Label>Houseplant</Label>
        <Combobox isEditable={false}>
          <Option value="Fern" isSelected />
          <Option value="Rubber tree" />
          <Option value="Snake plant" />
        </Combobox>
      </Field>
      <ResizeHandle {...register()} />
    </div>
  );
}

export default App;
