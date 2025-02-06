import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

import { AppointmentStatus } from "../interfaces/IAppointment";
import User from "./User";

@Entity({ name: "appointments"})

class appointment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    time: string;

    @Column()
    description: string;

    @Column()
    status: AppointmentStatus;


   @ManyToOne(() => User, (user) => user.appointment)
   user! : User;


}


export default appointment;