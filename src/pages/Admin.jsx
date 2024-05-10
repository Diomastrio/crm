import ProductoAdminTable from "../features/cabins/ProductoAdminTable";
import AddProducto from "../features/cabins/AddProducto";

import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Productos() {
  return (
    <>
      
      <Row type="horizontal">
       <Heading as="h1">Admin Dashboard</Heading>
      </Row>

      <Row>
        <ProductoAdminTable />
        <AddProducto />
      </Row>
    </>
  );
}

export default Productos;
