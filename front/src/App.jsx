import { Routes, Route } from "react-router-dom"
import "./styles/App.css"
import Home from './views/Home'
import MisTurnos from "./views/MisTurnos";
import Register from "./views/Register";
import Login from "./views/Login";
import Turnos from "./views/Turnos";
import About from "./views/About";
import Contact from "./views/Contact";
import { routes } from "./utils/routes";
import Layout from "./Layout/Layout";
import AuthRoutes from "./Layout/AuthRoutes";

function App() {


  return (
    <>
    
     <Routes>
        <Route path="/" element = {<Layout/>}>     
        <Route path= {routes.home} element = { <Home/>  }/>
        <Route path={routes.login} element = { <Login/>  }/>
        <Route path={routes.register} element = { <Register/>  }/>
        <Route path={routes.about} element = { <About/>  }/>
        <Route path={routes.contact} element = { <Contact/>  }/>
        <Route path= "*" element = { <h1> Error 404 Page Not-Found</h1>  }/>

        <Route element = { <AuthRoutes/> }>
        <Route path={routes.misTurnos} element = { <MisTurnos/> } />
        <Route path={routes.turnos} element = {<Turnos/>} />
        </Route>

      </Route>
     </Routes>
    </>
  )
}

export default App
