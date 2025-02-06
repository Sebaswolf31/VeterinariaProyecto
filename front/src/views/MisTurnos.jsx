
import {  BannerButton } from "../styles/BannerStyles";
import { useEffect } from 'react';
import { TurnoWrapper, TurnoHeader, TurnoColumn, PageContainerTurnos } from '../styles/TurnoStyles';
import { BannerTitleH2, ButtonContainer } from '../styles/BannerStyles'
import { Link } from 'react-router-dom'
import { routes } from '../utils/routes';

import Card from "../components/Card"
import { useAppointmentStates } from '../Context/Context';

const MisTurnos = () => {
    const { userAppointments , fetchData } = useAppointmentStates();
 

    useEffect (() => {

      fetchData()


}, [fetchData]);

    
  return (
    <div>
       <PageContainerTurnos>
        <BannerTitleH2> Mis Turnos </BannerTitleH2>
      {/* Encabezados */}
      <TurnoWrapper>
        <TurnoHeader>
          <TurnoColumn>Fecha De La Cita</TurnoColumn>
          <TurnoColumn>Hora Asignada</TurnoColumn>
          <TurnoColumn>Motivo De La Petición</TurnoColumn>
          <TurnoColumn>Estado De La Cita</TurnoColumn>
          <TurnoColumn>Acción</TurnoColumn>
        </TurnoHeader>

        {userAppointments.length === 0 ? <>  
        <BannerTitleH2> Todavia no tienes turnos asigandos </BannerTitleH2> 
        <Link to={routes.turnos}><ButtonContainer><BannerButton>Pedir Turno</BannerButton></ButtonContainer></Link>
           </> :  userAppointments.map((turno) => (
     
            <Card key={turno.id} {...turno} />
        ))}
      </TurnoWrapper>
      </PageContainerTurnos>

      
       <Link to={routes.turnos}><BannerButton>Pedir Turno</BannerButton></Link>


    
    </div>
  );
};

export default MisTurnos