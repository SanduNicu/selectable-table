import Checkbox from "./Checkbox";
import styles from "./styles.module.scss";

function UpperHeader() {
  return (
    <div className={styles.upperHeader}>
      <Checkbox />
      <button>Download Selected</button>
    </div>
  );
}

export default UpperHeader;
