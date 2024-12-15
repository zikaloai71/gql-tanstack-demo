import { UserRepository } from "../../../adapters/gateways/UserRepository";

export class GetUsers {
  constructor(private userRepository: UserRepository) {}

  execute() {
    return this.userRepository.getUsers();
  }
}