import { memo, useCallback } from "react";
import Checkbox from "./Checkbox";
import { columns } from "./constants";
import styles from "./styles.module.scss";
import { TableLine } from "./types";
import classnames from "classnames";

interface RowProps {
  data: TableLine;
  handleClick: () => void;
  isDisabled?: boolean;
  isSelected: boolean;
}

const Row = memo((props: RowProps) => {
  const { data, handleClick, isSelected, isDisabled = false } = props;
  const wrapperClassname = classnames({
    [styles.row]: true,
    [styles.disabled]: isDisabled,
    [styles.selected]: isSelected,
  });

  const onClick = useCallback(() => {
    if (isDisabled) return;
    handleClick();
  }, [handleClick, isDisabled]);

  return (
    <div className={wrapperClassname} onClick={onClick}>
      <Checkbox checked={isSelected} isDisabled={isDisabled} />
      {columns.map(({ key, width }) => (
        <div key={key} style={{ width: `${width}%` }}>
          {data[key as keyof TableLine]}
        </div>
      ))}
    </div>
  );
});

export default Row;
