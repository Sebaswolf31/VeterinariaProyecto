import { BannerContainer, BannerTitle, ButtonContainer, BannerButton, BannerImage } from "../styles/BannerStyles";
import { Link } from 'react-router-dom'
import { routes } from '../utils/routes';
import bannerImg from "../assets/banner.jpg"

import { useAppointmentStates } from "../Context/Context"

const Home = () => {

  const { user } = useAppointmentStates ();

    return  ( 
    
    <>
      
      <BannerImage src={bannerImg} alt="Banner Veterinaria" />
     
      <BannerContainer>
      <BannerTitle>Bienvenidos a nuestra Veterinaria</BannerTitle>
      { user.login && (
      
      <ButtonContainer>
       <Link to={routes.turnos}><BannerButton>Pedir Turno</BannerButton></Link>
      <Link to={routes.misTurnos}><BannerButton cancel href="#"  > Ver Turnos </BannerButton></Link>
      </ButtonContainer>
           )}
      </BannerContainer>
    </>

    );
};


export default Home;