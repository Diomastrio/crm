import ProductoTable from "../features/cabins/ProductoTable";
import AddProducto from "../features/cabins/AddProducto";

import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Productos() {
  return (
    <>
   
      <Row type="horizontal">
       <Heading as="h1">Agrega productos</Heading>
      </Row>

      <Row>
        <ProductoTable />
        <AddProducto />
      </Row>
    </>
  );
}

export default Productos;
