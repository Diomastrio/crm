import Button from "../../ui/Button";
import CreateClientForm from "./CreateClientForm";
import Modal from "../../ui/Modal";

function AddClient() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="client-form">
          <Button>Agrega cliente </Button>
        </Modal.Open>
        <Modal.Window name="client-form">
          <CreateClientForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddClient;
