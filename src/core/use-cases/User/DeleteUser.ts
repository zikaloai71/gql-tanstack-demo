import { UserRepository } from "../../../adapters/gateways/UserRepository";

export class DeleteUser {
   constructor(private userRepository: UserRepository) {}

   execute(userId: string){
    if (!userId) {
      throw new Error("User ID is required for deletion");
    }
    return  this.userRepository.deleteUser(userId);
  }
}
