import Checkbox from "./Checkbox";
import { columns } from "./constants";
import styles from "./styles.module.scss";
import { TableLine } from "./types";

interface RowProps {
  row: TableLine;
}

export default function Row(props: RowProps) {
  const { row } = props;
  return (
    <div className={`${styles.row}`}>
      <Checkbox />
      {columns.map(({ key, width }) => (
        <div key={key} style={{ width: `${width}%` }}>
          {row[key as keyof TableLine]}
        </div>
      ))}
    </div>
  );
}
