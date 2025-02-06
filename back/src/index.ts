import server from './server'
import "reflect-metadata"

import { PORT } from './config/envs';

import { AppDataSource } from './config/data-source';

AppDataSource.initialize()
.then(() => {
    console.log("Conexion a la base de datos exitosa!")
    server.listen(PORT, () =>{
 
        console.log(`Servidor iniciado y escuchando en el puerto ${PORT}`); 
    })
})
.catch((err) => {
    console.error("Error a la conexion de la base de datos", err)    
})

