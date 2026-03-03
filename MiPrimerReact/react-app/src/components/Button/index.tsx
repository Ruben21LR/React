import type { ReactNode } from "react";
// import styles from "./Button.module.css";
import styled from "styled-components";

type BtnProps = {
  isLoading: boolean;
};

const Btn = styled.button<BtnProps>`
  background-color: ${(props) => (props.isLoading ? "gray" : "coral")};
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgb(230, 204, 173);
  font-family: sans-serif;
  font-size: large;
  width: 100px;
  height: 40px;
  padding: 5px 10px;
`;

interface Props {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
}

// console.log(styles);
function Button({ children, isLoading, onClick }: Props) {
  return (
    <Btn
      disabled={isLoading}
      onClick={onClick}
      isLoading={isLoading}
      // className={styles.button}
      // className={`btn btn-${isLoading ? "secondary" : "primary"}`}
    >
      {isLoading ? "Cargando..." : children}
    </Btn>
  );
}

export default Button;
