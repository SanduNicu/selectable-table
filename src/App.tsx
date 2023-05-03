import { tableData } from "./data";
import SelectableTable from "./selectable-table/SelectableTable";

function App() {
  return <SelectableTable tableData={tableData} />;
}

export default App;
