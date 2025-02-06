import { DataSource } from "typeorm"
import { DATABASE, HOST, PASSWORD, PORT_PG, USUARIO } from "./envs"
import Credential from "../entities/Credential"
import User from "../entities/User"
import Appointment from "../entities/Appointment"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: HOST,
    port: Number(PORT_PG),
    username: USUARIO,
    password: PASSWORD,
    database: DATABASE,
    synchronize: true,
    logging: false,
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: [],
})


export const userModel = AppDataSource.getRepository(User);
export const credentialModel =  AppDataSource.getRepository(Credential);
export const appointmentModel = AppDataSource.getRepository(Appointment);