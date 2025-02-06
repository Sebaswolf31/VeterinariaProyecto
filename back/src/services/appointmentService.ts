import { AppointmentStatus } from "../interfaces/IAppointment";
import { AppointmentDto } from "../dto/appointmentDto"; // DTO para crear turnos
import Appointment from "../entities/Appointment";
import { userModel } from "../config/data-source";
import { appointmentModel } from "../config/data-source";



// Retornar todos los turnos
export const getAllAppointmentsService = async (): Promise<Appointment[]> => {

    const appointments = await appointmentModel.find()
    return appointments;
};

// Obtener un turno por ID
export const getAppointmentByIdService = async (id: number): Promise<Appointment> => {
    const appointment = await appointmentModel.findOneBy({id})
    if (!appointment) throw new Error("Turno no encontrado");
    return appointment;
};

// Crear un nuevo turno
export const createAppointmentService = async (appointmentData: AppointmentDto): Promise<Appointment> => {
    const { date, time, userId, description } = appointmentData;

    const findUser = await userModel.findOneBy({id: userId});
    if (!findUser) throw new Error("El turno debe estar asociado a un usuario");


    const newAppointment = appointmentModel.create({

        date, time, user:findUser, description, status: AppointmentStatus.ACTIVE
    })
    // Validar que el ID del usuario sea válido
    // if (!userId) throw new Error("El turno debe estar asociado a un usuario");

    // Crear el nuevo turno
    // const newAppointment: Appointment = {
    //     id: appointmentId++,
    //     date,
    //     time,
    //     userId,
    //     status: AppointmentStatus.ACTIVE, // Estado inicial del turno
    // };

    // appointments.push(newAppointment);
    await appointmentModel.save(newAppointment)
    return newAppointment;
};

// Cancelar un turno por ID
export const cancelAppointmentService = async (id: number): Promise<void> => {

    const appointment = await appointmentModel.findOneBy({id})

    //const appointment = appointments.find((appointment) => appointment.id === id);
    if (!appointment) throw new Error("Turno no encontrado");

    appointment.status = AppointmentStatus.CANCELLED

    await appointmentModel.save(appointment)

    // Cambiar el estado del turno a "cancelled"
    // appointment.status = AppointmentStatus.CANCELLED;
};

