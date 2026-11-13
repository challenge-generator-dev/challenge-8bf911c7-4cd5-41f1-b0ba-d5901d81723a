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