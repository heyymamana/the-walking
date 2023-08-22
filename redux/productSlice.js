import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DATA, PRODUCT_IMAGE_MAP } from "../data/product-image-map";

const initialState = {
    products: DATA,
    status: "idle",
    error: null
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetch("https://landdoorbd.com/api/audio/shop")
        return response.json()
    }
)

export const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchProducts.fulfilled]: (state, action) => {
            const { payload } = action;

            payload.data.forEach((product) => {
                product.featuredImage =
                    PRODUCT_IMAGE_MAP[product.name].featuredImage;
                product.images = PRODUCT_IMAGE_MAP[product.name].images;
            });

            state.status = 'success';
            state.products = payload.data;
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = 'failed';
        },
    },
});

export const selectStatus = (state) => state.products.status;
export const selectFeaturedProducts = (state) =>
    state.products.products.filter((item) => item.is_featured == 'true');
export const selectSneakers = (state) =>
    state.products.products.filter((item) => item.category == 'sneakers');
export const selectSports = (state) =>
    state.products.products.filter((item) => item.category == 'sports');
export const selectMenformal = (state) =>
    state.products.products.filter((item) => item.category == 'menformal');
export const selectWomen = (state) =>
    state.products.products.filter((item) => item.category == 'women');
    export const selectFlipflop = (state) =>
    state.products.products.filter((item) => item.category == 'flipflop');
export const selectProductsById = (state, id) =>
    state.products.products.find((product) => product.id === id)
export default productSlice.reducer;