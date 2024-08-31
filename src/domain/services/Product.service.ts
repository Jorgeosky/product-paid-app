import { productRepository } from '../../infrastructure/repositories/Product.repository';

export const productService = {
  getProducts: () => {
    return productRepository.getProducts();
  },
};
