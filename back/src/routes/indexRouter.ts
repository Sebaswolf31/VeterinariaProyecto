import { Router} from "express";

import usersRouter  from "./usersRouter"
import appointmentsRouter from "./appointmentRouter"


const router: Router =  Router();

// router.post("/users", createUser)

// router.get("/users", auth,  getUsers)

// router.delete("/users", deleteUser)

router.use("/users" , usersRouter);
router.use("/appointment" , appointmentsRouter);

export default router