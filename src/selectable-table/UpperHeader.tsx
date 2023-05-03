import { memo, useCallback } from "react";
import Checkbox from "./Checkbox";
import styles from "./styles.module.scss";

interface UpperHeaderProps {
  selectionLength: number;
  tableLength: number;
  clearSelection: () => void;
  selectAll: () => void;
  handleDownload: () => void;
}

const UpperHeader = memo((props: UpperHeaderProps) => {
  const {
    selectionLength,
    tableLength,
    clearSelection,
    selectAll,
    handleDownload,
  } = props;
  const selectionCountLabel = selectionLength
    ? `Selected ${selectionLength}`
    : "None Selected";

  const isChecked = selectionLength !== 0;
  const isSelectedAll = selectionLength === tableLength;
  const isIndeterminated = isChecked && !isSelectedAll;

  const handleClick = useCallback(() => {
    if (isSelectedAll) {
      clearSelection();
    } else {
      selectAll();
    }
  }, [clearSelection, selectAll, isSelectedAll]);

  return (
    <div className={styles.upperHeader}>
      <Checkbox
        handleClick={handleClick}
        checked={isChecked}
        indeterminated={isIndeterminated}
      />
      <label>{selectionCountLabel}</label>
      <button onClick={handleDownload}>Download Selected</button>
    </div>
  );
});

export default UpperHeader;
