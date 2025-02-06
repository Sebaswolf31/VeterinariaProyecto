

import { useState } from 'react';
import { cancelAppointment } from '../services/apiCalls';
import { CardContainer, CancelButton } from '../styles/TurnoStyles';

const Card = ({ date , id, time, description, status }) => {

  const [isCancelled, setIsCancelled] = useState(status)

  const canCancel = () => {
    const today = new Date();
    const appointmentDate = new Date(date);


    today.setHours(0, 0, 0, 0);
    appointmentDate.setHours(0, 0, 0, 0);

    return appointmentDate > today;
  };



  const cancel = async () => {
    if (!canCancel()) {
      alert("No puedes cancelar el turno 24 horas antes del día de la cita.");
      return;
    }

    try {
      await cancelAppointment(id);
      setIsCancelled("cancelled");
      alert("Turno cancelado exitosamente.");
    } catch (error) {
      console.error("Error cancelando el turno:", error);
      alert("Hubo un error al cancelar el turno. Intenta nuevamente.");
    }
  };



  return (
    
    <CardContainer>
      
      <div>{date}</div>
      <div>{time}</div>
      <div>{description}</div>
      <div>{isCancelled == "active" ? "Turno Reservado✅" : "Turno Cancelado❌"}</div>
      <CancelButton  

        disabled = {isCancelled === "cancelled"}
        onClick={cancel}
      
      
      > Cancelar Turno</CancelButton>

    </CardContainer>
  )
}

export default Card;