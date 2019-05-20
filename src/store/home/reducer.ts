import { addCart } from './actions';
import { HomeActionsType } from './home.type';
import { Categorie } from '../../interfaces/models/categorie';
import { Product } from '../../interfaces/models/product';

export interface HomeDataState {
  categorie: Categorie[];
  product: Product[];
  add_cart: any[];
  error: string;
  loading: boolean;
}

const initialState: HomeDataState = {
  categorie: [],
  product: [],
  add_cart: [],
  error: '',
  loading: false,
};

export default function homenReducer(
  state: HomeDataState = initialState,
  action: any,
): HomeDataState {
  switch (action.type) {
    case HomeActionsType.ADD_CATEGORIES: {
      return { ...state, categorie: [...state.categorie, ...action.data] };
    }
    case HomeActionsType.ADD_PRODUCT: {
      return { ...state, product: [...state.product, ...action.data] };
    }
    case HomeActionsType.ADD_CART: {
      return { ...state, add_cart: [...state.add_cart, action.data].sort() };
    }
    case HomeActionsType.ADD_CART_SUCCESS: {
      return { ...state, add_cart: action.data };
    }

    case HomeActionsType.UPDATE_CART: {
      let products = [...state.add_cart];
      const val_update: number = action.prev;
      const newProduct = action.data;
      products.splice(val_update, 1, newProduct);
      return { ...state, add_cart: products };
    }

    case HomeActionsType.REMOVE_PRODUCT_CART: {
      let products = [...state.add_cart];
      const val_delete: number = action.data;
      const temp = products.slice(val_delete, val_delete + 1)[0];
      products = products.filter((item: any) => item !== temp);

      return { ...state, add_cart: products };
    }
    case HomeActionsType.REMOVE_PRODUCT_CART_SUCCESS: {
      return { ...state, add_cart: action.data };
    }

    case HomeActionsType.CLEAR_CART: {
      return { ...state, loading: true };
    }
    case HomeActionsType.CLEAR_CART_SUCCESS: {
      return { ...state, add_cart: [], loading: false };
    }
    case HomeActionsType.ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
