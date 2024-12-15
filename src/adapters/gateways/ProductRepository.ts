import { Product } from "@/core/entities/Product";


export interface ProductRepository {
  getProducts(): Promise<Product[]>;
  // getUserById(id: number): Promise<User>;
  // createUser(user: Omit<User, 'id'>): Promise<User>;
  // updateUser(id: number, user: Partial<User>): Promise<User>;
  deleteProduct(id: string): Promise<void>;
}


