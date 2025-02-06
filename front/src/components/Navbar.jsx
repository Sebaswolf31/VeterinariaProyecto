

import { Link  } from 'react-router-dom'
import { Nav, Logo, NavLinks, NavLink, Buttons, Button } from "../styles/NavbarStyles";
import logo from "../assets/logo.png";
import { routes } from '../utils/routes' 
import { useAppointmentStates } from '../Context/Context'; 


const Navbar = () => {

  let { user, setUser } = useAppointmentStates();  

  const logout = () =>{

    setUser({ login: false, user: null})

  }

  return (
    <Nav>
      <Logo src={logo} alt="Veterinaria Logo" />
      <NavLinks>
        <Link to={routes.home}><NavLink href="#">Home</NavLink></Link>
        <Link to= {routes.about}><NavLink href="#">About</NavLink></Link>
        <Link to= {routes.contact}><NavLink href="#">Contact</NavLink></Link>
      </NavLinks>
      <Buttons>
      
     {user.login ? (
       <Button onClick={logout}>Cerrar Sesión</Button>

     ) : (
     
     <>
        <Link to={routes.login}><Button href="#">Login</Button> </Link>
          <Link to={routes.register}><Button href="#">Register</Button> </Link>
     </>
      )}
      </Buttons>
      
    </Nav>
  )
}

export default Navbar;