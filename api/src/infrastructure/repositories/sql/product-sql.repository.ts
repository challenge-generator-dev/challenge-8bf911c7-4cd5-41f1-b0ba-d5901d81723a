import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Product } from '../../../domain/entities/product.entity';
import { ProductRepository } from '../../../domain/repositories/product.repository';

@Injectable()
export class ProductSqlRepository implements ProductRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(product: Product): Promise<Product> {
    const createdProduct = await this.prisma.product.create({
      data: {
        name: product.name,
        price: product.price,
        stock: product.stock,
      },
    });
    return new Product(createdProduct.id, createdProduct.name, createdProduct.price, createdProduct.stock);
  }

  async findById(id: string): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });
    return product ? new Product(product.id, product.name, product.price, product.stock) : null;
  }

  async findByName(name: string): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({
      where: { name },
    });
    return product ? new Product(product.id, product.name, product.price, product.stock) : null;
  }

  async update(id: string, product: Product): Promise<Product> {
    const updatedProduct = await this.prisma.product.update({
      where: { id },
      data: {
        name: product.name,
        price: product.price,
        stock: product.stock,
      },
    });
    return new Product(updatedProduct.id, updatedProduct.name, updatedProduct.price, updatedProduct.stock);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.product.delete({
      where: { id },
    });
  }
}