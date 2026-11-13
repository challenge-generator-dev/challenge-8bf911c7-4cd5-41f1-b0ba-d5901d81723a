import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsInt, IsNumber, IsPositive, IsString, Min } from 'class-validator';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  id: string;

  @IsString()
  @Prop({ required: true })
  name: string;

  @IsNumber()
  @IsPositive()
  @Prop({ required: true })
  price: number;

  @IsInt()
  @Min(0)
  @Prop({ required: true })
  stock: number;

  constructor(id: string, name: string, price: number, stock: number) {
    super();
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  static create(name: string, price: number, stock: number): Product {
    if (price <= 0) {
      throw new Error('Price must be positive');
    }
    if (stock < 0) {
      throw new Error('Stock cannot be negative');
    }
    return new Product('', name, price, stock);
  }

  update(name?: string, price?: number, stock?: number): Product {
    const updatedName = name !== undefined ? name : this.name;
    const updatedPrice = price !== undefined ? price : this.price;
    const updatedStock = stock !== undefined ? stock : this.stock;

    if (updatedPrice <= 0) {
      throw new Error('Price must be positive');
    }
    if (updatedStock < 0) {
      throw new Error('Stock cannot be negative');
    }

    return new Product(this.id, updatedName, updatedPrice, updatedStock);
  }
}

export const ProductMongooseSchema = SchemaFactory.createForClass(Product);

export { Product as ProductEntity };
export const ProductSchema = ProductMongooseSchema;