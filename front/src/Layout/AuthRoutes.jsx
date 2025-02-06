
import { Outlet,Navigate } from 'react-router-dom';
import { useAppointmentStates } from '../Context/Context'

const AuthRoutes = () => {


    const {user} = useAppointmentStates();
    
  return   user.login ? <Outlet/> : < Navigate to="/" replace />; 

}

export default AuthRoutes