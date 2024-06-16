import CreateDiplomado from "./CreateDiplomadoForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddDiplomado() {
  return (
    <>
    <Modal>
     <Modal.Open opens="diplomado-form">
       <Button>Agregar Diplomado </Button>
     </Modal.Open>
     <Modal.Window name="diplomado-form">
       <CreateDiplomado />
     </Modal.Window>
   </Modal>
 </>
  );
}

export default AddDiplomado;
