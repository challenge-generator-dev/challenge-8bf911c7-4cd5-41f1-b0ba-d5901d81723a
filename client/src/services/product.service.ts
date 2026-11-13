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