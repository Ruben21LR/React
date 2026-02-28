import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list: string[] = ["Goku", "Tanjiro", "Naruto"];

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };

  const contenido = list.length !== 0 && (
    <List data={list} onSelect={handleSelect} />
  );

  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto" />
      {contenido}
    </Card>
  );
}

export default App;
