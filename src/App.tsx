import { Button } from "@zendeskgarden/react-buttons";
import { Col, Grid, Row } from "@zendeskgarden/react-grid";
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
    maxHeight: 700,
  });
  useResizeContainer({ height: height, width: "100%" });

  return (
    <div>
      <Grid gutters={false}>
        <Row justifyContent="center">
          <Col sm={5}>
            <Field>
              <Label>Houseplant</Label>
              <Combobox isEditable={false}>
                <Option value="Fern" isSelected />
                <Option value="Rubber tree" />
                <Option value="Snake plant" />
              </Combobox>
            </Field>
          </Col>
        </Row>
        <Row>
          <Col sm={5}>
            <Button isPrimary isStretched>
              Create Ticket
            </Button>
          </Col>
        </Row>
      </Grid>
      <ResizeHandle {...register()} />
    </div>
  );
}

export default App;
