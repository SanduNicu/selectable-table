import { memo } from "react";
import { columns } from "./constants";
import styles from "./styles.module.scss";

const Header = memo(() => {
  return (
    <div className={styles.header}>
      {columns.map(({ name, width, key }) => (
        <div key={key} style={{ width: `${width}%` }}>
          {name}
        </div>
      ))}
    </div>
  );
});

export default Header;
