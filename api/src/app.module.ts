import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './infrastructure/controllers/product.controller';
import { ProductService } from './application/services/product.service';
import { ProductSqlRepository } from './infrastructure/repositories/sql/product-sql.repository';
import { ProductNosqlRepository } from './infrastructure/repositories/nosql/product-nosql.repository';
import { ProductRepository } from './domain/repositories/product.repository';
import { Product, ProductSchema } from './domain/entities/product.entity';

export const PRODUCT_REPOSITORY = 'PRODUCT_REPOSITORY';

@Module({
  controllers: [ProductController],
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  providers: [
    ProductService,
    {
      provide: PRODUCT_REPOSITORY,
      useClass: ProductSqlRepository,
    },
    ProductSqlRepository,
    ProductNosqlRepository,
  ],
  exports: [ProductService, ProductSqlRepository, ProductNosqlRepository],
})
export class AppModule {}