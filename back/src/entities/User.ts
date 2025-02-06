import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Credential from "./Credential";
import Appointment from "./Appointment";


@Entity ({ name : "users" })
class User {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column({ unique: true } )
    email : string;

    @Column()
    birthdate : string;

    @Column({ type:"bigint", unique: true })
    nDni : number;

    // la relacion entre credenciales y usuarios es uno a uno 
    @OneToOne(() => Credential)
    @JoinColumn()  // especificamos que unificamos la columna de credential
    credential! : Credential;


    @OneToMany(() => Appointment, (appointment) => appointment.user)
    appointment! : Appointment[];
}



export default User;