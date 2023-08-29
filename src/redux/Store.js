const { configureStore } = require("@reduxjs/toolkit");
import ProductReducer from './ProductsSlice'
import WhishListReducer from './WishListSlice'
import CartReducer from './CartSlice'

export const store = configureStore({
    reducer :{
        product : ProductReducer,
        wishList : WhishListReducer,
        cart: CartReducer,
    }
})