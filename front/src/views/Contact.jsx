
import { ContactContainer, Title, Info } from "../styles/ContactStyles"


const Contact = () => {
    return (
      <ContactContainer>
        <Title>Contacto</Title>
        <Info>📍 Dirección: Calle Ficticia 123, Ciudad</Info>
        <Info>📞 Teléfono: +123 456 789</Info>
        <Info>✉️ Email: contacto@veterinaria.com</Info>
        <Info>⏰ Horario: Lunes a Sabado de 08:00 AM a 05:00 PM</Info>
      </ContactContainer>
    );
  };
  
  export default Contact;