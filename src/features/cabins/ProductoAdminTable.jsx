import ProductoAdminRow from "./ProductoAdminRow";
import { useProductos} from "./useProducto";

import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

function ProductoAdminTable() {
  const { isLoading, productos } = useProductos();

  if (isLoading) return <Spinner />;


  return (
    <Menus>
      <Table columns="0.7fr 1.2fr 0fr 2fr 1fr 1fr 0.5fr">
        <Table.Header>
          <div>Articulo</div>
          <div>Nombre</div>
          <div></div>
          <div>Cantidad</div>
          <div>Precio</div>
          <div>Descripción</div>
          <div>Opciones</div>
        </Table.Header>

        <Table.Body
          data={productos}
          render={(producto) => (
            <ProductoAdminRow producto={producto} key={producto.id} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default ProductoAdminTable;
