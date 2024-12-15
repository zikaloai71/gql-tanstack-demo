import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
// import { UserRepository } from "../../adapters/gateways/UserRepository";
// import { UserRepositoryImpl } from "../repositories/UserRepositoryImpl";
// import { ProductRepository } from "@/adapters/gateways/ProductRepository";
// import { ProductRepositoryImpl } from "../repositories/ProductRepositoryImpl";
import { CountryRepository } from "@/adapters/gateways/CountryRepository";
import { CountryRepositoryImpl } from "../repositories/CountryRepositoryImpl";


const container = new Container();

// Bind repositories to their implementations
// container.bind<UserRepository>(TYPES.UserRepository).to(UserRepositoryImpl);
// container.bind<ProductRepository>(TYPES.ProductRepository).to(ProductRepositoryImpl);
container.bind<CountryRepository>(TYPES.CountryRepository).to(CountryRepositoryImpl);


export { container };
