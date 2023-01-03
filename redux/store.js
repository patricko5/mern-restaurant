import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlide';

export default configureStore({
    reducer: {
        cart: cartReducer,
    }
})