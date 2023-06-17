import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {reducer as productListReducer} from '../components/ProductList/productListSlice'

const reducers = combineReducers({
  productList: productListReducer
})

export const store = configureStore({
    reducer: reducers
  })