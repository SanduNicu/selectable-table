import { memo, useMemo } from "react";
import Body from "./Body";
import Header from "./Header";
import UpperHeader from "./UpperHeader";
import styles from "./styles.module.scss";
import useSelection from "./useSelection";
import { availableStatus } from "./constants";
import { TableLine } from "./types";

interface SelectableTableProps {
  tableData: TableLine[];
}

const SelectableTable = memo((props: SelectableTableProps) => {
  const { tableData } = props;

  const availableData = useMemo(
    () => tableData.filter((data) => data.status === availableStatus),
    [tableData]
  );

  const { selection, handleSelection, clearSelection, selectAll } =
    useSelection(availableData);

  return (
    <section className={styles.table}>
      <UpperHeader
        selectionLength={selection.length}
        tableLength={availableData.length}
        clearSelection={clearSelection}
        selectAll={selectAll}
      />
      <Header />
      <Body
        selection={selection}
        handleSelection={handleSelection}
        rows={tableData}
      />
    </section>
  );
});

export default SelectableTable;
