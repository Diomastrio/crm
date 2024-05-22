import Button from "../../ui/Button";
import CreateProductoForm from "./CreateClienteForm";
import Modal from "../../ui/Modal";

function AddProducto() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="producto-form">
          <Button>Agrega un Producto </Button>
        </Modal.Open>
        <Modal.Window name="producto-form">
          <CreateProductoForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddProducto;
