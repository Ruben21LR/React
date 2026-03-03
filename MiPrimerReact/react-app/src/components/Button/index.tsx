import type { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
}

console.log(styles);
function Button({ children, isLoading, onClick }: Props) {
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      className={styles.button}
      // className={`btn btn-${isLoading ? "secondary" : "primary"}`}
      type="button"
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
}

export default Button;
