import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CreateProduct, ProductsState } from '../../types/product';
import { customAxios } from '../customAxios';


const initialState: ProductsState = {
    products: [],
    isLoading: false,
    error: null
};

export const getAllProducts = createAsyncThunk(
    'products/getAll',
    async (_, { rejectWithValue }) => {
        try {
            const response = await customAxios.get('/products');
            return response.data;
        }
        catch (error: any) {
            return rejectWithValue(error.response.data || 'Failed to fetch products');
        }
    }
);

export const createProduct = createAsyncThunk(
    'products/create',
    async (productData: CreateProduct, { rejectWithValue }) => {
        try {
            const response = await customAxios.post('/products', productData);
            return response.data;
        }
        catch (error: any) {
            return rejectWithValue(error.response.data || 'Failed to create product');
        }
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getAllProducts.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(createProduct.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(createProduct.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.products.push(action.payload);
            })
            .addCase(createProduct.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export default productsSlice.reducer;
