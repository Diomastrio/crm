import Button from "../../ui/Button";
import CreateProductoForm from "./CreateProductoForm";
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
