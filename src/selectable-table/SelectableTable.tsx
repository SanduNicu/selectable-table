import Body from "./Body";
import Header from "./Header";
import UpperHeader from "./UpperHeader";
import styles from "./styles.module.scss";
import { TableLine } from "./types";

interface SelectableTableProps {
  data: TableLine[];
}

function SelectableTable(props: SelectableTableProps) {
  const { data } = props;
  return (
    <div className={styles.table}>
      <UpperHeader />
      <Header />
      <Body rows={data} />
    </div>
  );
}

export default SelectableTable;
