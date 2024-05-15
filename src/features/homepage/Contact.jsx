import { useState } from "react";
import styled from "styled-components";
import contact from "../../img/contact.jpg";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { AiOutlineForm } from "react-icons/ai";
import supabase from "../../services/supabase";
import { toast } from "react-hot-toast";

const CenteredIcon = styled(AiOutlineForm)`
  font-size: 7rem; /* Adjust the font size as needed */
  margin-left: 3rem;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const ContactSection = styled.section`
position: relative;
background-color: #f7f7f7;
padding: 5rem 0;
justify-content: center;
align-items: center;
background-image: url(${contact});
background-size: cover;
background-position: center;
z-index: 1; /* add z-index to parent */

&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1; /* add negative z-index to ::before pseudo-element */
}
`;

const ContactHeader = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  padding-left: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 42rem;
  padding-left: 2rem;
`;

const ContactLabel = styled.label`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-left: 2rem;
  width: 12rem;
`;

const ContactInput = styled.input`
  font-size: 1.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #333;
  width: 40rem;
  background: linear-gradient(to left, #1c1b2c, #17494d);
`;

const ContactTextarea = styled.textarea`
  font-size: 1.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 40rem;
  background: linear-gradient(to left, #1c1b2c, #17494d);
`;

function Contact() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase
      .from("sugerencias")
      .insert([{ nombre, correo, mensaje }]);
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      setNombre("");
      setCorreo("");
      setMensaje("");
      toast.success("Sugerencia enviada!");
    }
  };
  return (
    <ContactSection>
      <ContactHeader>Alguna sugerencia?</ContactHeader>
      <Modal>
        <Modal.Open opens="sugerencias">
        <IconWrapper>
            <CenteredIcon />
          </IconWrapper>
        </Modal.Open>
        <Modal.Window name="sugerencias">
          <ContactForm onSubmit={handleSubmit} onSuccess>
            <ContactLabel htmlFor="name">Nombre:</ContactLabel>
            <ContactInput
              type="text"
              id="name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <ContactLabel htmlFor="email">Correo:</ContactLabel>
            <ContactInput
              id="email"
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <ContactLabel htmlFor="message">Mensaje:</ContactLabel>
            <ContactTextarea
              id="message"
              rows="5"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
            <Button type="submit" onClick={() => {}}>
              Enviar
            </Button>
          </ContactForm>
        </Modal.Window>
      </Modal>
    </ContactSection>
  );
}

export default Contact;
