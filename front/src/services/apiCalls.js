import axios from 'axios';
import Swal from 'sweetalert2'

const urlUsers = "http://localhost:3000/users/"
const urlAppointments = "http://localhost:3000/appointment/"



export const getUser = async () => {

    try {

        const res = await  axios.get(urlUsers)
        console.log(res)
        return res.data
        
    } catch (error) {
        console.log(error)
        
    }
    

}

export const getUserById = async (id) => {


    try {

        const res = await axios.get(urlUsers+id)
        console.log(res)
        return res.data
        
    } catch (error) {
        console.log(error)
        
    }
    

}

export const createUser = async (newUser) => {

    try {
        const res = await axios.post(urlUsers+"register", newUser)
        console.log("Usuario Creado Con Éxito",res)
        Swal.fire({
            title: "Usuario Creado Con Éxito!",
            icon: "success",
            draggable: true
          });
    } catch (error) {
        const errorMessage = error.response?.data?.message || "No se pudo registrar el usuario"
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: errorMessage,
            footer: '<a>Intentalo Nuevamente</a>'
          });
        console.log(error)
    }

}


export const login = async (user) => {
    try {
        const res = await axios.post(urlUsers + "login", user);
        return res.data; 
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se pudo ingresar!",
            footer: '<a>Verifica usuario o contraseña</a>'
        });
        console.log(error);
    
        throw new Error(error.response?.data?.message || "Error en el servidor");
    }
};





export const getAllAppointments = async () => {

    try {
        
        const {data} = await axios.get(urlAppointments)
        return data
    } catch (error) {
        console.log(error)
    }  
}


export const getAppointmentById = async (id) => {

    try {

        const res = await axios.get(urlAppointments+id)
        console.log(res)
        return res.data
        
    } catch (error) {
        console.log(error)
        
    }
    

}



export const createAppointment = async (newAppointment) => {

    try {

        const res =  await axios.post(urlAppointments+"schedule", newAppointment)
        console.log(res)
        return res.data
        
    } catch (error) {
        console.log(error)
        
    }
    

}
export const cancelAppointment = async (id) => {


    try {

        const res = await axios.put(urlAppointments+"cancel/"+id)
        console.log(res)
        return res.data
        
    } catch (error) {
        console.log(error)
        
    }
    
    
}