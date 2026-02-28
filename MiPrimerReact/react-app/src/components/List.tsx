import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (elemento: string) => void;
};

function List({ data, onSelect }: Props) {
  const [index, setIndex] = useState(0);
  const handleClick = (indice: number, elemento: string) => {
    setIndex(indice);
    onSelect?.(elemento);
  };
  return (
    <ul className="list-group">
      {data.map((elemento, indice) => (
        <li
          onClick={() => handleClick(indice, elemento)}
          key={elemento}
          className={`list-group-item ${index == indice ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
