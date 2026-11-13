import { Injectable, Inject, NotFoundException, BadRequestException } from '@nestjs/common';
import { Product } from '../../domain/entities/product.entity';
import { ProductRepository } from '../../domain/repositories/product.repository';
import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';
import { PRODUCT_REPOSITORY } from '../../app.module';

@Injectable()
export class ProductService {
  constructor(
    @Inject(PRODUCT_REPOSITORY) private readonly productRepository: ProductRepository,
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    // TODO(reto): Implementar la lógica para crear un producto
    // Verificar unicidad del nombre antes de crear
    // Usar Product.create() para validar invariantes
    // Llamar a productRepository.create()
    throw new Error('Method not implemented');
  }

  async getProduct(id: string): Promise<Product> {
    // TODO(reto): Implementar la lógica para obtener un producto por ID
    // Llamar a productRepository.findById()
    // Manejar el caso cuando el producto no existe
    throw new Error('Method not implemented');
  }

  async updateProduct(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    // TODO(reto): Implementar la lógica para actualizar un producto
    // Verificar que el producto existe antes de actualizar
    // Usar product.update() para validar invariantes
    // Llamar a productRepository.update()
    throw new Error('Method not implemented');
  }

  async deleteProduct(id: string): Promise<void> {
    // TODO(reto): Implementar la lógica para eliminar un producto
    // Verificar que el producto existe antes de eliminar
    // Llamar a productRepository.delete()
    throw new Error('Method not implemented');
  }
}