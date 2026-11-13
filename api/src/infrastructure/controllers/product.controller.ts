// TODO(reto): archivo stubbeado; implementa los cuerpos.
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from '../../application/dtos/create-product.dto';
import { UpdateProductDto } from '../../application/dtos/update-product.dto';
import { Product } from '../../domain/entities/product.entity';
import { ProductService } from '../../application/services/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    throw new Error('TODO(reto): Post');
  }

  @Get(':id')
  async getProduct(@Param('id') id: string): Promise<Product> {
    throw new Error('TODO(reto): Get');
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    throw new Error('TODO(reto): Put');
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteProduct(@Param('id') id: string): Promise<void> {
    // TODO(reto): Implementar la lógica de eliminación de producto
    // El servicio ya tiene el método deleteProduct que debe invocarse aquí
    // No retornar nada (void)
  }
}