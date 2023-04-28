import { tableData } from "./data";
import SelectableTable from "./selectable-table/SelectableTable";

function App() {
  return <SelectableTable data={tableData} />;
}

export default App;
