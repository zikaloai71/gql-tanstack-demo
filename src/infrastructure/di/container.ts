import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { CountryRepository } from "@/adapters/interfaces/CountryRepository";
import { CountryRepositoryImpl } from "../repositories/CountryRepositoryImpl";


const container = new Container();

// Bind repositories to their implementations
container.bind<CountryRepository>(TYPES.CountryRepository).to(CountryRepositoryImpl);



export { container };
