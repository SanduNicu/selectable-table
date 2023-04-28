import { columns } from "./constants";
import styles from "./styles.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      {columns.map(({ name, width, key }) => (
        <div key={key} style={{ width: `${width}%` }}>
          {name}
        </div>
      ))}
    </div>
  );
}

export default Header;
