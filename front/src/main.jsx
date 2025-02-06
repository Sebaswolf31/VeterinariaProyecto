import { createRoot } from 'react-dom/client'
import "./styles/index.css"
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import Context from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(

<BrowserRouter>

    <Context>
            <App/>
    </Context>

</BrowserRouter>

    




)
