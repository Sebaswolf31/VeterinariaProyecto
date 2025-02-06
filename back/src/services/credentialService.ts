import { EntityManager } from 'typeorm'
import { credentialModel } from "../config/data-source";
import { CredentialDto } from "../dto/credentialDto";
import Credential from "../entities/Credential"
 
export const CreateCredentialService = async (credentialData : CredentialDto, transactionalEntityManager : EntityManager ) : Promise<Credential> => {  

    const { username, password } = credentialData;

    const existingCredential = await credentialModel.findOneBy({ username });

    if (existingCredential) {
      throw new Error("El nombre de usuario ya está registrado");
    }


     const newCredential = credentialModel.create ({
        username, password
    });

    // const newCredential: Credential = {
    //     username,
    //     password,
    // };
  //   credentials.push(newCredential);
     await transactionalEntityManager.save(newCredential)
    return newCredential;
}




export const validateCredentialService = async (credentialData : CredentialDto): Promise<number> => {

    const { username , password } = credentialData

    const foundCredential = await credentialModel.findOneBy({username})
   // const foundCredential = credentials.find((credential) => credential.username === username)

    if (!foundCredential || foundCredential.password !== password) throw new Error("Fallo de ingreso")

    return foundCredential.id

}