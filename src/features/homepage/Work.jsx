import styled from "styled-components";
import form2 from "../../img/form2.jpg";
const WorkSection = styled.section`
  background-color: #fff;
  padding: 5rem 0;
  justify-content: center;
  align-items: center;
  background-image: url(${form2});
  background-size: cover;
  background-position: center;
  padding-left: 2rem;
  z-index: 1; /* add negative z-index to ::before pseudo-element */


position: relative;
 
&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: -1; /* add negative z-index to ::before pseudo-element */
}
`;

const WorkHeader = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  padding-left: 2rem;
`;

const WorkParagraph = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  padding-left: 2rem;
`;

const WorkList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
  padding-left: 2rem;
`;

const WorkListItem = styled.li`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-left: 2rem;
`;

function Work() {
  return (
    <WorkSection>
      <WorkHeader>Como funciona</WorkHeader>
      <WorkParagraph>
        Crea tu cuenta y empieza a ser parte de este proyecto junto a mas
        usuarios que desan vender o comprar productosen linea dentro de la
        Universidad Tecnologica de Durango
      </WorkParagraph>
      <WorkList>
        <WorkListItem>
          Vende productos que ya no necesites o nuevos.
        </WorkListItem>
        <WorkListItem>
          Compra productos de los alumnos que te ofrezcan.
        </WorkListItem>
        <WorkListItem>Has crecer tu negocio y economia.</WorkListItem>
      </WorkList>
    </WorkSection>
  );
}

// const Work = () => {
//   const workInfoData = [
//     {
//       image: PickMeals,
//       title: 'Vende',
//       text: '',
//     },
//     {
//       image: ChooseMeals,
//       title: 'Compra',
//       text: '',
//     },
//     {
//       image: DeliveryMeals,
//       title: 'Crece',
//     },
//   ];
//   return (
//     <div className="work-section-wrapper">
//       <div className="work-section-top">
//         <p className="primary-subheading">Compra Y Venta</p>
//         <h1 className="primary-heading">Como Funciona</h1>
//         <p className="primary-text">
//
//         </p>
//       </div>
//       <div className="work-section-bottom">
//         {workInfoData.map((data) => (
//           <div className="work-section-info" key={data.title}>
//             <div className="info-boxes-img-container">
//               <img src={data.image} alt="" />
//             </div>
//             <h2>{data.title}</h2>
//             <p>{data.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default Work;
