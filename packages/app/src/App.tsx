import { BasicExample } from "./views/BasicExample.js";
import { ColumnPropsTableExample } from "./views/ColumnPropsTableExample.js";
import { TanStackTableExample } from "./views/TanStackTableExample.js";

export function App() {
  return (
    <>
      <BasicExample />
      <hr />
      <TanStackTableExample />
      <hr />
      <ColumnPropsTableExample />
    </>
  );
}
