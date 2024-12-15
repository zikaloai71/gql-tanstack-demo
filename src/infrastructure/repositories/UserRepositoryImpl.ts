// import { injectable } from "inversify";
// import { UserRepository } from "../../adapters/gateways/UserRepository";
// import { UserService } from "../api/UserService";
// import { User } from "../../core/entities/User";


// @injectable()
// export class UserRepositoryImpl implements UserRepository {
//   async getUsers(): Promise<User[]> {
//     return UserService.getAll();
//   }
  

//   // async create(user: User): Promise<User> {
//   //   return UserService.create(user);
//   // }

//   // async update(user: User): Promise<User> {
//   //   return UserService.update(user);
//   // }
//   async deleteUser(userId: string): Promise<void> {
//     await UserService.delete(userId);
//   }

// }
