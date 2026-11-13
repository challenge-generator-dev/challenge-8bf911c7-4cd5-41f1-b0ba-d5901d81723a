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