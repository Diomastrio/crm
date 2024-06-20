import CreateDiplomado from "./CreateDisciplinaForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import DisciplinaTable from "../disciplinas/DisciplinaTable";

function AddDisciplina() {
  return (
    <>
    <Modal>
     <Modal.Open opens="disciplina-form">
     <Button variation={"swapii"}>Agregar Disciplina </Button>
     </Modal.Open>
     {/* <Modal.Open opens="disciplina">
     <Button variation={"secondary"}>Disciplinas </Button>
     </Modal.Open> */}
     
     <Modal.Window name="disciplina-form">  
       <CreateDiplomado/>
     </Modal.Window>
     <Modal.Window name="disciplina">  
       <DisciplinaTable/> 
     </Modal.Window>
   </Modal>
 </>
  );
}

export default AddDisciplina;
