import {Router} from "express"
import * as usersController from "../controllers/usersController"

const usersRouter: Router = Router();


// GET /users => Obtener el listado de todos los usuarios.
usersRouter.get("/", usersController.getUserController)


// GET /users/:id => Obtener el detalle de un usuario específico.
usersRouter.get("/:id", usersController.getUserByIdController)

// POST /users/register => Registro de un nuevo usuario.

usersRouter.post("/register", usersController.createUserController)

// POST /users/login => Login del usuario a la aplicación.
usersRouter.post("/:login", usersController.loginUserController)


export default usersRouter;







