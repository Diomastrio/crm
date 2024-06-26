import CreateDiplomado from "./CreateCuentaForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddDisciplina() {
  return (
    <>
    <Modal>
     <Modal.Open opens="disciplina-form">
     <Button variation={"swapii"}>Agregar Cuenta </Button>
     </Modal.Open>
     <Modal.Window name="disciplina-form">  
       <CreateDiplomado/>
     </Modal.Window>

   </Modal>
 </>
  );
}

export default AddDisciplina;
