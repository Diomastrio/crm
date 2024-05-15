import ArticuloTableFilter from "../features/cabins/ArticuloTableFilter";
import { useArticulos } from "../features/cabins/useArticulo";
import ArticuloTable from "../features/articulos/ArticuloTable";


import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import Row from "../ui/Row";
import Empty from "../ui/Empty";

function Articulos() {
  const { isLoading, cliente } = useArticulos();
  if (isLoading) return <Spinner />;
  if (!cliente.length) return <Empty resourceName="clientes" />;

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Clientes Encontrados</Heading>
        <ArticuloTableFilter />
      </Row>
      <ArticuloTable />
    </>
  );
}

export default Articulos;
