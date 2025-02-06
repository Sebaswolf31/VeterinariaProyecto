import { Request, Response } from "express";

import {getUserServices, getUserByIdService, createUserServices, loginService} from "../services/userService"

import { validateCredentialService } from "../services/credentialService"
import  {CredentialDto}  from "../dto/credentialDto"


export const getUserController = async (req: Request, res: Response) => {

    try {
       const users = await getUserServices()
       res.status(200).json(users)
        
    } catch (error) {
        res.status(404).json( {message:" Error al obtener los usuarios"})
    }

    // res.send("Obtener usuarios")
}

export const getUserByIdController = async (req: Request <{ id: number }>, res: Response) => {

    try {
        const id:number = Number(req.params.id)
        const user = await getUserByIdService(id);
        res.status(200).json(user)
        
    } catch (error : any) {
        res.status(404).json({message: " No se pudo obtener el usuario por el id"})
    }
   // res.send("Obtener usuario por Id")
}

export const createUserController = async (req: Request, res: Response) => {

  try {
    
    const { name, email, birthdate, nDni, username, password } = req.body
    const newUser = await createUserServices({
      name,
      email, 
      birthdate, 
      nDni, 
      username, 
      password
    })

    res.status(200).json({ user: newUser, message: "Usuario Creado Con Éxito"})
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};



  export const loginUserController = async (req: Request <{}, {}, CredentialDto>, res: Response) => {

    try {

      const { username, password } = req.body;
      const credentialId = await validateCredentialService ({ username, password });
      const user = await loginService(credentialId);
      res.status(200).json({login: true, user});
     } catch (error: any) {
      res.status(400).json({ message: error.message})
      
    }
  }