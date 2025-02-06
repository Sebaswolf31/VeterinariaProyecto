import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import {  getUserById } from '../services/apiCalls'


const AppointmentStates = createContext();


const Context = ({ children }) => {

    const [user, setUser] = useState({
        login: false,
        user: null 
    });
    const [userAppointments, setUserAppointments] = useState([]);



    const fetchData = useCallback(async () => {
        if (user.login && user.user?.id) {
            try {
                const data = await getUserById(user.user.id);
                setUserAppointments(data ? data.appointment : []);
            } catch (error) {
                console.error("Error obteniendo los turnos:", error);
            }
        }
    }, [user]);  
    
    useEffect(() => {
        fetchData();  
    }, [fetchData]);  
    

    // const fetchData = async () => {
        
    //     if (user.login && user.user) {
    //         try {
    //             const data = await getUserById(user.user.id);
    //             setUserAppointments(data ? data.appointment : []);
    //         } catch (error) {
    //             console.error("Error obteniendo los turnos:", error);
    //         }
    //     }
    // };


    return (
        
        <AppointmentStates.Provider value = {{user, userAppointments, fetchData, setUser}}>
            {children}
        </AppointmentStates.Provider>

    );
};


export default Context;



export const useAppointmentStates = () => {

    return useContext(AppointmentStates)


}

