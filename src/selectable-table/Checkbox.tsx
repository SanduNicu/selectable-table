import { memo, useEffect, useRef } from "react";
import styles from "./styles.module.scss";

interface CheckboxProps {
  checked?: boolean;
  indeterminated?: boolean;
  isDisabled?: boolean;
  handleClick?: () => void;
}

const Checkbox = memo((props: CheckboxProps) => {
  const {
    checked = false,
    indeterminated = false,
    isDisabled = false,
    handleClick,
  } = props;
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminated;
    }
  }, [indeterminated]);

  return (
    <input
      disabled={isDisabled}
      readOnly={!handleClick}
      onChange={handleClick}
      checked={checked}
      ref={checkboxRef}
      className={styles.checkbox}
      type="checkbox"
    />
  );
});

export default Checkbox;
