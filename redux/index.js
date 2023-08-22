import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import countReducer from './counterSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    version: 1,
    blacklist: ["counter", "products"]
}


const rootReducer = combineReducers({
    counter: countReducer,
    products: productReducer,
    cart: cartReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }), 
});

export default store;