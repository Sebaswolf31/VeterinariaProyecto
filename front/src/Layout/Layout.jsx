import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
import GlobalStyles from "../styles/GlobalStyles"
const Layout = () => {
  return (
    <div>
        
        <GlobalStyles/>
        <Navbar />
        <Outlet/>
        <Footer />

    </div>
  )
}

export default Layout