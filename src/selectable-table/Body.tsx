import { memo } from "react";
import Row from "./Row";
import styles from "./styles.module.scss";
import { TableLine } from "./types";
import { availableStatus } from "./constants";

interface BodyProps {
  rows: TableLine[];
  handleSelection: (row: string) => void;
  selection: string[];
}

const Body = memo((props: BodyProps) => {
  const { rows, handleSelection, selection } = props;

  return (
    <div className={styles.body}>
      {rows.map((row) => (
        <Row
          handleClick={() => handleSelection(row.name)}
          isSelected={selection.includes(row.name)}
          isDisabled={row.status !== availableStatus}
          key={row.name}
          data={row}
        />
      ))}
    </div>
  );
});

export default Body;
