import ArticuloTableFilter from "../features/cabins/ArticuloTableFilter";
import { useMarcadorTable } from "../features/cabins/useMarcador";
import MarcadorTable from "../features/articulos/MarcadorTable";


import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import Row from "../ui/Row";
import Empty from "../ui/Empty";

function Articulos() {
  const { isLoading, productos } = useMarcadorTable();
  if (isLoading) return <Spinner />;
  if (!productos.length) return <Empty resourceName="marcadores" />;
//console.log(productos)
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Artículos Marcados</Heading>
        <ArticuloTableFilter />
      </Row>
      <MarcadorTable />
    </>
  );
}

export default Articulos;
