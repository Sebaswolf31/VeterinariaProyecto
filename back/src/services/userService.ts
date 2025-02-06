import { EntityManager } from 'typeorm'
import { AppDataSource, userModel } from "../config/data-source";
import  { UserDto } from "../dto/userDto";
import User from"../entities/User"
import { CreateCredentialService } from "./credentialService"; 




export const getUserServices  =  async (): Promise<User[]> => { 

    const dbUser : User[] = await userModel.find();
    return dbUser;

}

export const getUserByIdService = async (id:number): Promise<User> => {

  const usuario: User | null =  await userModel.findOne({where: {id}, relations: ['appointment']})
  if (!usuario) throw new Error ("Usuario No Encontrado");
  return usuario;
};
 
export const createUserServices = async (userData: UserDto): Promise<User> => {
  const { name, email, birthdate, nDni, username, password } = userData;

  return await AppDataSource.transaction(async (transactionalEntityManager) => {
    try {

      const credential = await CreateCredentialService(
        { username, password },
        transactionalEntityManager
      );

      const newUser = userModel.create({
        name,
        email,
        birthdate,
        nDni,
        credential,
      });

      await transactionalEntityManager.save(newUser);
      return newUser;

    } catch (error: any) {
      throw new Error(error.message);
    }
  });
  
};

 export const loginService = async ( credentialId : number) : Promise<User | null> => {

  const user = await userModel.findOne({
    where: {credential: {id: credentialId}}
  });
  return user;

 }