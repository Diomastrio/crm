import { useCuenta } from "../features/cuentas/useSelectCuenta";
import DisciplinaTable from "../features/cuentas/CuentaTable";

import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import Row from "../ui/Row";
import Empty from "../ui/Empty";

import CreateDisciplina from "../features/agregarCuenta/CreateCuenta";

function Cuenta() {
  const { isLoading, cuenta } = useCuenta();
  if (isLoading) return <Spinner />;
  if (!cuenta.length) return <Empty resourceName="cuenta" />;

  return (
    <>
      <Row type="vertical">
        <Row type="horizontal" style={{ justifyContent: 'start', gap: '10px'}}>
        <Heading as="h1">Cuenta</Heading>
        <CreateDisciplina />     
        </Row>
      </Row>
      <DisciplinaTable/> 
    </>
  );
}

export default Cuenta;
