import { User } from '@/core/entities/User';

export interface UserRepository {
  getUsers(): Promise<User[]>;
  // getUserById(id: number): Promise<User>;
  // createUser(user: Omit<User, 'id'>): Promise<User>;
  // updateUser(id: number, user: Partial<User>): Promise<User>;
  deleteUser(id: string): Promise<void>;
}


