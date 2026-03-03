import { useState } from "react";
import Card from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";

function App() {
  /* const [isLoading, setIsLoading] = useState(false);
    const handleClick = () => {
    setIsLoading(!isLoading);
  };

  const list: string[] = ["Goku", "Naruto", "Spiderman"];

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };

  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto" />
      {/* Si la lista contiene algo (diferente de 0) imprime la lista si no el texto no hay contenido */

  /* {list.length !== 0 ? (
        <List data={list} onSelect={handleSelect} />
      ) : (
        "No hay contenido"
      )}
      <Button isLoading={isLoading} onClick={handleClick}>
        Hola mundo
        </Button> 
    </Card>
  );
 */

  const [data, setData] = useState(["Goku", "Naruto", "Spiderman"]);

  const handleAdd = () => {
    setData([...data, "Minion"]);
  };

  const handleDelete = () => {
    setData(data.slice(0, -1));
  };

  return (
    <Card>
      <Button onClick={handleAdd} >Agregar</Button>
      <Button onClick={handleDelete}>Eliminar</Button>
      <List data={data}></List>
    </Card>
  );
}

export default App;
