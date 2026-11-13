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