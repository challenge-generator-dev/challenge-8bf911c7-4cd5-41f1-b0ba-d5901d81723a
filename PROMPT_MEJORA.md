# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `api/src/application/services/product.service.ts` — La fase "Crear y Obtener Productos" se implementa aqui: este archivo es el ejercicio.
- `api/src/infrastructure/controllers/product.controller.ts` — La fase "Actualizar y Eliminar Productos" se implementa aqui: este archivo es el ejercicio.

## Mapa de componentes

El repo tiene una carpeta por componente. Cada uno se instala y verifica dentro de la suya.

| Componente | Carpeta | Rol | Capa | Track | Tecnologias |
|---|---|---|---|---|---|
| `api` | `api/` | practice | server | Node | DynamoDB, MongoDB |
| `client` | `client/` | chapter, support | client | React | - |
| `infra-local` | (raiz) | support | infra | Compose local | DynamoDB, MongoDB |

## Orden de arranque

1. `docker compose up -d` (en la raiz) — levanta la infraestructura local.
2. `cd api && npm install --no-audit --no-fund && npm run build` — componente `api` (practice).
3. `cd client && npm install --no-audit --no-fund && npm run build` — componente `client` (chapter, support).

### Contratos entre componentes

- `api` expone http (api: http://localhost:3000):
  - `POST /products`
  - `GET /products/:id`
  - `PUT /products/:id`
  - `DELETE /products/:id`

## Herramientas

- **IntelliJ IDEA Debugger**: Depura el componente con la run-config de IntelliJ IDEA (menu Run, carpeta .run/): pone breakpoints donde implementas el reto y arranca en modo debug.

## Como saber que terminaste

```bash
(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología React, Trainee L2

### Brecha de conocimiento
Construye operaciones básicas, como crear, obtener, actualizar y eliminar (CRUD), en bases de datos SQL o NoSQL utilizando definición y manipulación de datos (DDL y DML), Construye operaciones básicas, como crear, obtener, actualizar y eliminar (CRUD), en bases de datos SQL o NoSQL utilizando definición y manipulación de datos (DDL y DML)

### Reto
- Tema: construye-operaciones-crud-en-bases-de-datos-sql-y-nosql
- Seniority: trainee-l2
- Tipo: practical
- Título: Implementación de operaciones CRUD en bases de datos SQL y NoSQL
- Tiempo estimado: 6 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Crear y Obtener Productos — objetivo: Implementar operaciones de creación y obtención de productos en bases de datos SQL y NoSQL. — entregable (NO resolver): Operaciones de creación y obtención de productos funcionales en bases de datos SQL y NoSQL.
- Fase 2: Actualizar y Eliminar Productos — objetivo: Implementar operaciones de actualización y eliminación de productos en bases de datos SQL y NoSQL. — entregable (NO resolver): Operaciones de actualización y eliminación de productos funcionales en bases de datos SQL y NoSQL.
- Fase 3: Optimización y Refactorización — objetivo: Optimizar y refactorizar las operaciones CRUD implementadas en bases de datos SQL y NoSQL. — entregable (NO resolver): Operaciones CRUD optimizadas y refactorizadas en bases de datos SQL y NoSQL.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: api/package.json ===
{
  "name": "reto-nest",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json"
  },
  "dependencies": {
    "@nestjs/common": "10.4.22",
    "@nestjs/core": "10.4.22",
    "@nestjs/mongoose": "11.0.4",
    "@nestjs/platform-express": "10.4.22",
    "@prisma/client": "5.22.0",
    "class-transformer": "0.5.1",
    "class-validator": "0.15.1",
    "mongoose": "8.24.9",
    "reflect-metadata": "0.2.2",
    "rxjs": "7.8.2"
  },
  "devDependencies": {
    "@types/express": "4.17.25",
    "@types/node": "22.20.5",
    "typescript": "5.7.3"
  }
}

// === ARCHIVO: api/tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "strictPropertyInitialization": false,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "types": [
      "node"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "test",
    "src/**/*.spec.ts",
    "src/**/*.test.ts"
  ]
}

// === ARCHIVO: api/src/domain/entities/product.entity.ts ===
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

// === ARCHIVO: api/src/domain/repositories/product.repository.ts ===
import { Product } from '../entities/product.entity';

export interface ProductRepository {
  create(product: Product): Promise<Product>;
  findById(id: string): Promise<Product | null>;
  findByName(name: string): Promise<Product | null>;
  update(id: string, product: Product): Promise<Product>;
  delete(id: string): Promise<void>;
}

// === ARCHIVO: api/src/application/services/product.service.ts ===
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

// === ARCHIVO: api/src/application/dtos/create-product.dto.ts ===
import { IsInt, IsNumber, IsPositive, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsInt()
  @Min(0)
  stock: number;

  constructor(name: string, price: number, stock: number) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

// === ARCHIVO: api/src/application/dtos/update-product.dto.ts ===
import { IsInt, IsNumber, IsOptional, IsPositive, IsString, Min } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  stock?: number;

  constructor(name?: string, price?: number, stock?: number) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

// === ARCHIVO: api/src/infrastructure/repositories/sql/product-sql.repository.ts ===
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

// === ARCHIVO: api/src/infrastructure/repositories/nosql/product-nosql.repository.ts ===
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

// === ARCHIVO: api/src/infrastructure/controllers/product.controller.ts ===
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

// === ARCHIVO: api/src/app.module.ts ===
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

// === ARCHIVO: api/src/main.ts ===
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  const host = process.env.HOST || '0.0.0.0';
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  
  app.enableCors({
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
  });
  
  await app.listen(port, host);
  console.log(`Application is running on: http://${host}:${port}`);
}

bootstrap();

// === ARCHIVO: client/src/main.tsx ===
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './shared/theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// === ARCHIVO: client/package.json ===
{
  "name": "reto-react",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "tsc --noEmit && vite build"
  },
  "dependencies": {
    "@mui/icons-material": "6.5.0",
    "@mui/material": "6.5.0",
    "axios": "1.21.1",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-router-dom": "7.18.5"
  },
  "devDependencies": {
    "@types/react": "18.3.31",
    "@types/react-dom": "18.3.7",
    "@vitejs/plugin-react": "4.7.0",
    "typescript": "5.7.3",
    "vite": "5.4.21"
  }
}

// === ARCHIVO: client/tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "strictPropertyInitialization": false,
    "noEmit": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "useDefineForClassFields": true,
    "types": [
      "vite/client"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "src/**/*.test.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.ts",
    "src/**/*.spec.tsx"
  ]
}

// === ARCHIVO: client/vite.config.ts ===
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({ plugins: [react()] });

// === ARCHIVO: client/index.html ===
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reto</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

// === ARCHIVO: client/src/vite-env.d.ts ===
/// <reference types="vite/client" />

// === ARCHIVO: client/src/types/product.ts ===
/**
 * Tipos TypeScript para los productos del inventario.
 * Estos tipos reflejan el contrato de la API REST definida en el backend.
 */
export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
};

export type CreateProductDto = {
  name: string;
  price: number;
  stock: number;
};

export type UpdateProductDto = {
  name?: string;
  price?: number;
  stock?: number;
};

// === ARCHIVO: client/src/services/product.service.ts ===
import axios, { AxiosError } from 'axios';
import { Product, CreateProductDto, UpdateProductDto } from '../types/product';

/**
 * Servicio para interactuar con la API REST de productos.
 * Encapsula las operaciones CRUD y maneja errores de forma consistente.
 */
export class ProductService {
  private readonly apiUrl: string;

  constructor(baseUrl: string = 'http://localhost:3000') {
    this.apiUrl = baseUrl;
    this.setupAxiosDefaults();
  }

  private setupAxiosDefaults(): void {
    axios.defaults.baseURL = this.apiUrl;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.timeout = 5000;
  }

  /**
   * Obtiene todos los productos del inventario.
   * @returns Promise con el array de productos.
   * @throws Error si la operación falla.
   */
  async getAllProducts(): Promise<Product[]> {
    try {
      const response = await axios.get<Product[]>('/products');
      return response.data;
    } catch (error) {
      this.handleAxiosError(error as AxiosError);
      throw new Error('No se pudieron obtener los productos');
    }
  }

  /**
   * Crea un nuevo producto en el inventario.
   * @param productData Datos del producto a crear.
   * @returns Promise con el producto creado.
   * @throws Error si la creación falla.
   */
  async createProduct(productData: CreateProductDto): Promise<Product> {
    try {
      const response = await axios.post<Product>('/products', productData);
      return response.data;
    } catch (error) {
      this.handleAxiosError(error as AxiosError);
      throw new Error('No se pudo crear el producto');
    }
  }

  /**
   * Obtiene un producto por su ID.
   * @param id ID del producto.
   * @returns Promise con el producto encontrado.
   * @throws Error si el producto no existe o hay un error de red.
   */
  async getProduct(id: string): Promise<Product> {
    try {
      const response = await axios.get<Product>(`/products/${id}`);
      return response.data;
    } catch (error) {
      this.handleAxiosError(error as AxiosError);
      throw new Error('No se pudo obtener el producto');
    }
  }

  /**
   * Actualiza un producto existente.
   * @param id ID del producto a actualizar.
   * @param updateData Datos parciales para actualizar.
   * @returns Promise con el producto actualizado.
   * @throws Error si la actualización falla.
   */
  async updateProduct(id: string, updateData: UpdateProductDto): Promise<Product> {
    try {
      const response = await axios.put<Product>(`/products/${id}`, updateData);
      return response.data;
    } catch (error) {
      this.handleAxiosError(error as AxiosError);
      throw new Error('No se pudo actualizar el producto');
    }
  }

  /**
   * Elimina un producto del inventario.
   * @param id ID del producto a eliminar.
   * @returns Promise que se resuelve cuando la eliminación es exitosa.
   * @throws Error si la eliminación falla.
   */
  async deleteProduct(id: string): Promise<void> {
    try {
      await axios.delete(`/products/${id}`);
    } catch (error) {
      this.handleAxiosError(error as AxiosError);
      throw new Error('No se pudo eliminar el producto');
    }
  }

  /**
   * Maneja errores de Axios de forma consistente.
   * @param error Error de Axios.
   */
  private handleAxiosError(error: AxiosError): void {
    if (error.response) {
      console.error('Error en la API:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('Error de red:', error.message);
    } else {
      console.error('Error:', error.message);
    }
  }
}

// Instancia singleton del servicio para evitar múltiples instancias
const productService = new ProductService();
export default productService;

// === ARCHIVO: client/src/features/products/ProductList.tsx ===
import { useState, useEffect, useCallback } from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Box,
  CircularProgress,
  Alert,
} from '@mui/material';
import { Delete, Edit, Add } from '@mui/icons-material';
import { Product, CreateProductDto, UpdateProductDto } from '../../types/product';
import { ProductForm } from './ProductForm';
import productService from '../../services/product.service';

interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: string | null;
  createProduct: (data: CreateProductDto) => Promise<void>;
  updateProduct: (id: string, data: UpdateProductDto) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  refreshProducts: () => void;
}

function useProducts(): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await productService.getAllProducts();
      setProducts(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar productos');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const createProduct = async (data: CreateProductDto): Promise<void> => {
    await productService.createProduct(data);
  };

  const updateProduct = async (id: string, data: UpdateProductDto): Promise<void> => {
    await productService.updateProduct(id, data);
  };

  const deleteProduct = async (id: string): Promise<void> => {
    await productService.deleteProduct(id);
  };

  return {
    products,
    loading,
    error,
    createProduct,
    updateProduct,
    deleteProduct,
    refreshProducts: fetchProducts,
  };
}

interface ProductListProps {
  onEditProduct?: (id: string) => void;
}

export function ProductList({ onEditProduct }: ProductListProps) {
  const { products, loading, error, createProduct, updateProduct, deleteProduct, refreshProducts } = useProducts();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const handleOpenCreate = () => {
    setEditingProduct(null);
    setFormError(null);
    setIsFormOpen(true);
  };

  const handleOpenEdit = (product: Product) => {
    setEditingProduct(product);
    setFormError(null);
    setIsFormOpen(true);
    if (onEditProduct) {
      onEditProduct(product.id);
    }
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingProduct(null);
    setFormError(null);
  };

  const handleSubmit = async (data: CreateProductDto | UpdateProductDto) => {
    try {
      setFormError(null);
      if (editingProduct) {
        await updateProduct(editingProduct.id, data as UpdateProductDto);
      } else {
        await createProduct(data as CreateProductDto);
      }
      handleCloseForm();
      refreshProducts();
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Error al guardar el producto');
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('¿Está seguro de que desea eliminar este producto?')) {
      try {
        await deleteProduct(id);
        refreshProducts();
      } catch (err) {
        alert(err instanceof Error ? err.message : 'Error al eliminar el producto');
      }
    }
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          Gestión de Productos
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={handleOpenCreate}
        >
          Nuevo Producto
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {formError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {formError}
        </Alert>
      )}

      <TableContainer component={Paper} elevation={2}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'primary.main' }}>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>ID</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Nombre</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="right">Precio</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="right">Stock</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ py: 4 }}>
                  <Typography variant="body1" color="text.secondary">
                    No hay productos registrados
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ '&:hover': { backgroundColor: 'action.hover' } }}
                >
                  <TableCell component="th" scope="row">
                    {product.id}
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell align="right">${product.price.toFixed(2)}</TableCell>
                  <TableCell align="right">{product.stock}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      color="primary"
                      onClick={() => handleOpenEdit(product)}
                      aria-label="Editar producto"
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(product.id)}
                      aria-label="Eliminar producto"
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <ProductForm
        open={isFormOpen}
        onClose={handleCloseForm}
        onSubmit={handleSubmit}
        initialData={editingProduct}
        onEditProduct={onEditProduct}
      />
    </Container>
  );
}

// === ARCHIVO: client/src/features/products/ProductForm.tsx ===
import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  InputAdornment,
} from '@mui/material';
import { Product, CreateProductDto, UpdateProductDto } from '../../types/product';

interface ProductFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: CreateProductDto | UpdateProductDto) => Promise<void>;
  initialData: Product | null;
  onEditProduct?: (id: string) => void;
}

export function ProductForm({ open, onClose, onSubmit, initialData, onEditProduct }: ProductFormProps) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; price?: string; stock?: string }>({});

  const isEditing = initialData !== null;

  useEffect(() => {
    if (open) {
      if (initialData) {
        setName(initialData.name);
        setPrice(initialData.price.toString());
        setStock(initialData.stock.toString());
      } else {
        setName('');
        setPrice('');
        setStock('');
      }
      setErrors({});
    }
  }, [open, initialData]);

  const validateForm = (): boolean => {
    const newErrors: { name?: string; price?: string; stock?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'El nombre es requerido';
    } else if (name.trim().length < 3) {
      newErrors.name = 'El nombre debe tener al menos 3 caracteres';
    }

    const priceNum = parseFloat(price);
    if (!price || isNaN(priceNum)) {
      newErrors.price = 'El precio es requerido y debe ser un número';
    } else if (priceNum < 0) {
      newErrors.price = 'El precio no puede ser negativo';
    }

    const stockNum = parseInt(stock, 10);
    if (!stock || isNaN(stockNum)) {
      newErrors.stock = 'El stock es requerido y debe ser un número';
    } else if (stockNum < 0) {
      newErrors.stock = 'El stock no puede ser negativo';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const data = isEditing
        ? {
            name: name.trim(),
            price: parseFloat(price),
            stock: parseInt(stock, 10),
          } as UpdateProductDto
        : {
            name: name.trim(),
            price: parseFloat(price),
            stock: parseInt(stock, 10),
          } as CreateProductDto;

      await onSubmit(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setPrice(value);
    }
  };

  const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d*$/.test(value)) {
      setStock(value);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 'bold' }}>
        {isEditing ? 'Editar Producto' : 'Crear Producto'}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
          <TextField
            label="Nombre del producto"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!errors.name}
            helperText={errors.name}
            fullWidth
            required
            autoFocus
            inputProps={{ 'aria-label': 'Nombre del producto' }}
          />
          <TextField
            label="Precio"
            value={price}
            onChange={handlePriceChange}
            error={!!errors.price}
            helperText={errors.price}
            fullWidth
            required
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            inputProps={{ 'aria-label': 'Precio', inputMode: 'decimal' }}
          />
          <TextField
            label="Cantidad en stock"
            value={stock}
            onChange={handleStockChange}
            error={!!errors.stock}
            helperText={errors.stock}
            fullWidth
            required
            InputProps={{
              startAdornment: <InputAdornment position="start">📦</InputAdornment>,
            }}
            inputProps={{ 'aria-label': 'Cantidad en stock', inputMode: 'numeric' }}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} color="inherit" disabled={isSubmitting}>
          Cancelar
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Guardando...' : isEditing ? 'Actualizar' : 'Crear'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

// === ARCHIVO: client/src/shared/theme.ts ===
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
        },
      },
    },
  },
});

// === ARCHIVO: client/src/App.tsx ===
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { ProductList } from './features/products/ProductList';
import { ProductForm } from './features/products/ProductForm';
import { CreateProductDto, UpdateProductDto, Product } from './types/product';
import { ProductService } from './services/product.service';

const productService = new ProductService('http://localhost:3000');

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleOpenCreate = () => {
    setEditingProduct(null);
    setFormOpen(true);
  };

  const handleOpenEdit = async (id: string) => {
    try {
      const product = await productService.getProduct(id);
      setEditingProduct(product);
      setFormOpen(true);
    } catch (error) {
      console.error('Error fetching product for edit:', error);
    }
  };

  const handleCloseForm = () => {
    setFormOpen(false);
    setEditingProduct(null);
  };

  const handleSubmit = async (data: CreateProductDto | UpdateProductDto) => {
    try {
      if (editingProduct) {
        await productService.updateProduct(editingProduct.id, data as UpdateProductDto);
      } else {
        await productService.createProduct(data as CreateProductDto);
      }
      handleCloseForm();
      setRefreshKey((k) => k + 1);
    } catch (error) {
      console.error('Error saving product:', error);
      throw error;
    }
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gestión de Inventario
          </Typography>
          <Button
            color="inherit"
            startIcon={<AddIcon />}
            onClick={handleOpenCreate}
            sx={{ bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}
          >
            Nuevo Producto
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                key={refreshKey}
                onEditProduct={handleOpenEdit}
              />
            }
          />
        </Routes>
      </Container>

      <ProductForm
        open={formOpen}
        onClose={handleCloseForm}
        onSubmit={handleSubmit}
        initialData={editingProduct}
      />
    </Box>
  );
}

export default App;

// === ARCHIVO: .run/api.run.xml ===
<component name="ProjectRunConfigurationManager">
  <configuration default="false" name="api" type="js.build_tools.npm" nameIsGenerated="false">
    <package-json value="$PROJECT_DIR$/api/package.json" />
    <command value="run" />
    <scripts>
      <script value="start" />
    </scripts>
    <node-interpreter value="project" />
    <envs>
      <env name="DYNAMODB_ENDPOINT" value="http://localhost:8000" />
      <env name="AWS_REGION" value="us-east-1" />
      <env name="AWS_ACCESS_KEY_ID" value="local" />
      <env name="AWS_SECRET_ACCESS_KEY" value="local" />
      <env name="MONGODB_URI" value="mongodb://localhost:27017/app" />
    </envs>
    <method v="2" />
  </configuration>
</component>


// === ARCHIVO: docker-compose.yml ===
# Infraestructura local del reto. SOLO desarrollo: credenciales de ejemplo (local-dev-only), puertos en loopback.
# Levantar: docker compose up -d --wait
name: infra-local
services:
  dynamodb-local:
    image: "amazon/dynamodb-local:2.5.2"
    command: ["-jar","DynamoDBLocal.jar","-sharedDb","-inMemory"]
    ports:
      - "127.0.0.1:8000:8000"
    healthcheck:
      test: ["CMD-SHELL","bash -c ':> /dev/tcp/127.0.0.1/8000' || exit 1"]
      interval: 10s
      timeout: 5s
      retries: 10
      start_period: 5s
  mongo:
    image: "mongo:7.0.14"
    ports:
      - "127.0.0.1:27017:27017"
    environment:
      MONGO_INITDB_DATABASE: "app"
    volumes:
      - "./infra-local/mongo/init.js:/docker-entrypoint-initdb.d/init.js:ro"
    healthcheck:
      test: ["CMD","mongosh","--quiet","--eval","db.adminCommand('ping').ok"]
      interval: 10s
      timeout: 10s
      retries: 10
      start_period: 20s


// === ARCHIVO: infra-local/README.md ===
# Infraestructura local

Servicios de soporte para el reto, definidos en `docker-compose.yml` (raiz del repo).

```bash
docker compose up -d --wait
```

| Servicio | Imagen | Puertos (host) |
|---|---|---|
| DynamoDB Local | `amazon/dynamodb-local:2.5.2` | 8000 |
| MongoDB | `mongo:7.0.14` | 27017 |

Credenciales: solo de desarrollo local (`local-dev-only`, `local`). No son secretos ni deben reutilizarse.
Los scripts de `infra-local/` (tablas, topics) se ejecutan con el compose en estado healthy.


// === ARCHIVO: infra-local/dynamodb/create-tables.sh ===
#!/usr/bin/env bash
# Crea las tablas en DynamoDB Local (idempotente). Credenciales dummy: DynamoDB Local no valida firmas.
set -euo pipefail

export AWS_ACCESS_KEY_ID=local
export AWS_SECRET_ACCESS_KEY=local
export AWS_REGION=us-east-1
ENDPOINT="${DYNAMODB_ENDPOINT:-http://localhost:8000}"

create_table() {
  local name="$1" pk="$2" sk="${3:-}"
  if aws dynamodb describe-table --table-name "$name" --endpoint-url "$ENDPOINT" >/dev/null 2>&1; then
    echo "Tabla $name ya existe"
    return
  fi
  local attrs="AttributeName=$pk,AttributeType=S"
  local keys="AttributeName=$pk,KeyType=HASH"
  if [ -n "$sk" ]; then
    attrs="$attrs AttributeName=$sk,AttributeType=S"
    keys="$keys AttributeName=$sk,KeyType=RANGE"
  fi
  # shellcheck disable=SC2086
  aws dynamodb create-table --table-name "$name" --attribute-definitions $attrs --key-schema $keys \
    --billing-mode PAY_PER_REQUEST --endpoint-url "$ENDPOINT" >/dev/null
  echo "Tabla $name creada"
}

create_table "app-items" "id"


// === ARCHIVO: infra-local/mongo/init.js ===
// Se ejecuta una sola vez al crear el volumen de MongoDB (docker-entrypoint-initdb.d).
db = db.getSiblingDB('app');
db.createCollection('items');
db.items.createIndex({ name: 1 });

```
