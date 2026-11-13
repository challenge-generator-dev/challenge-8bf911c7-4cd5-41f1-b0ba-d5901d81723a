import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../../../domain/entities/product.entity';
import { ProductRepository } from '../../../domain/repositories/product.repository';

export interface ProductDocument extends Document {
  id: string;
  name: string;
  price: number;
  stock: number;
}

@Injectable()
export class ProductNosqlRepository implements ProductRepository {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async create(product: Product): Promise<Product> {
    const createdProduct = new this.productModel({
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.stock,
    });
    const savedProduct = await createdProduct.save();
    return new Product(
      savedProduct.id,
      savedProduct.name,
      savedProduct.price,
      savedProduct.stock,
    );
  }

  async findById(id: string): Promise<Product | null> {
    const product = await this.productModel.findOne({ id }).exec();
    if (!product) {
      return null;
    }
    return new Product(product.id, product.name, product.price, product.stock);
  }

  async findByName(name: string): Promise<Product | null> {
    const product = await this.productModel.findOne({ name }).exec();
    if (!product) {
      return null;
    }
    return new Product(product.id, product.name, product.price, product.stock);
  }

  async update(id: string, product: Product): Promise<Product> {
    const updatedProduct = await this.productModel
      .findOneAndUpdate(
        { id },
        {
          name: product.name,
          price: product.price,
          stock: product.stock,
        },
        { new: true },
      )
      .exec();
    if (!updatedProduct) {
      throw new Error(`Product with id ${id} not found`);
    }
    return new Product(
      updatedProduct.id,
      updatedProduct.name,
      updatedProduct.price,
      updatedProduct.stock,
    );
  }

  async delete(id: string): Promise<void> {
    const result = await this.productModel.deleteOne({ id }).exec();
    if (result.deletedCount === 0) {
      throw new Error(`Product with id ${id} not found`);
    }
  }
}