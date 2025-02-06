
import {Router} from "express"

import * as appointmentsController from '../controllers/appointmentController';

const appointmentsRouter: Router = Router();

// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
appointmentsRouter.get("/", appointmentsController.getAppointmentsController)
// GET /appointments => Obtener el detalle de un turno específico.
appointmentsRouter.get("/:id", appointmentsController.getAppointmentsByIdController)

// POST /appointments/schedule => Agendar un nuevo turno.
appointmentsRouter.post("/schedule", appointmentsController.createAppointmentsController)

// PUT /appointments/cancel => Cambiar el estatus de un turno a “cancelled”.
appointmentsRouter.put("/cancel/:id", appointmentsController.cancelAppointmentsController)


export default appointmentsRouter;



