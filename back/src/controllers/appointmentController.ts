import { Request, Response } from "express";
import * as appointmentsService from '../services/appointmentService';
import { AppointmentDto } from "../dto/appointmentDto";

export const getAppointmentsController = async (req: Request, res: Response): Promise<void> => {
    try {
      const appointments = await appointmentsService.getAllAppointmentsService();
      res.status(200).json(appointments);
    } catch (error) {
      res.status(500).json({ message:" Error" });
    }
  };


export const getAppointmentsByIdController = async (req: Request <{ id: string}>, res: Response): Promise<void> => {
    try {
      const appointmentId = parseInt(req.params.id, 10);
      const appointment = await appointmentsService.getAppointmentByIdService(appointmentId);
      res.status(200).json(appointment);
    } catch (error) {
      res.status(404).json({ message: "Error" });
    }
  };
export const createAppointmentsController = async (req: Request<{}, {}, AppointmentDto>, res: Response): Promise<void> => {
    try {
      const { date, time, userId, description} = req.body;

      const newAppointment = await appointmentsService.createAppointmentService({
        date,
        time,
        userId,
        description,
      });
      res.status(201).json(newAppointment);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
export const cancelAppointmentsController = async (req: Request<{ id: string}>, res: Response): Promise<void> => {
    try {
      const appointmentId = parseInt(req.params.id, 10);
      await appointmentsService.cancelAppointmentService(appointmentId);
      res.status(200).json({ message: 'Turno cancelado exitosamente' });
    } catch (error) {
      res.status(404).json({ message: "Error" });
    }
  };