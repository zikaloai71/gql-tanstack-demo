import { ProductRepository } from "@/adapters/gateways/ProductRepository";

export class GetProducts {
  constructor(private productRepository: ProductRepository) {}

  execute() {
    return this.productRepository.getProducts();
  }
}