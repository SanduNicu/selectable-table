import Row from "./Row";
import styles from "./styles.module.scss";
import { TableLine } from "./types";

interface BodyProps {
    rows: TableLine[];
  }
function Body(props: BodyProps) {
  const { rows } = props;
  

  return (
    <div className={styles.body}>
      {rows.map((row) => (
        <Row key={row.name} row={row} />
      ))}
    </div>
  );
}

export default Body;
