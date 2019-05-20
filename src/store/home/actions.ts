import { HomeActionsType } from './home.type';
import { Categorie } from '../../interfaces/models/Categorie';
import { Product } from '../../interfaces/models/Product';

export const addCategorie = (data: Categorie[]) => ({
  data,
  type: HomeActionsType.ADD_CATEGORIES,
});

export const addProduct = (data: Product[]) => ({
  data,
  type: HomeActionsType.ADD_PRODUCT,
});

//Send data
export const addCart = (data: any) => ({
  data,
  type: HomeActionsType.ADD_CART,
});

export const addCartSuccess = (data: any) => ({
  data,
  type: HomeActionsType.ADD_CART_SUCCESS,
});

//Send data
export const updateCart = (prev: any, data: any) => ({
  prev,
  data,
  type: HomeActionsType.UPDATE_CART,
});

export const updateCartSuccess = (prev: any, data: any) => ({
  prev,
  data,
  type: HomeActionsType.UPDATE_CART_SUCCESS,
});

// remove on product
export const removeProduct = (data: any) => ({
  data,
  type: HomeActionsType.REMOVE_PRODUCT_CART,
});

export const removeProductSucces = (data: any) => ({
  data,
  type: HomeActionsType.REMOVE_PRODUCT_CART_SUCCESS,
});

// clear all cart
export const clearCart = () => ({
  type: HomeActionsType.CLEAR_CART,
});

export const clearCartSuccess = () => ({
  type: HomeActionsType.CLEAR_CART_SUCCESS,
});

// Handle home errors
export const homeError = (error: any) => ({
  error,
  type: HomeActionsType.ERROR,
});
