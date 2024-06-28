import ProspectoTableFilter from "../features/prospectos/ProspectoTableFilter";
import { useProspecto } from "../features/prospectos/useSelectProspecto";
import ProspectoTable from "../features/prospectos/ProspectoTable";

import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import Row from "../ui/Row";
import Empty from "../ui/Empty";

function Prospectos() {
  const { isLoading, prospecto } = useProspecto();
  if (isLoading) return <Spinner />;
  //if (!prospecto.length) return <Empty resourceName="prospectos" />;

  return (
    <>
      <Row type="vertical">
        <Row type="horizontal">
        <Heading as="h1">Prospectos</Heading>
        </Row>
        <ProspectoTableFilter />
      </Row>
      <ProspectoTable />
    </>
  );
}

export default Prospectos;
