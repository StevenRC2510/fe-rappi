import {
  createStore,
  combineReducers,
  applyMiddleware,
  Reducer,
  AnyAction,
} from 'redux';

import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaul
// Reducers
import { sidenavReducer } from './sidenav/reducer';
import { homeReducer } from './home/index';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['home'],
};

export const history = createBrowserHistory();

const metaReducers: Reducer<any, AnyAction> = combineReducers({
  home: homeReducer,
  router: connectRouter(history),
  sidenav: sidenavReducer,
});

const persistedReducer = persistReducer(persistConfig, metaReducers);

// Middlewares
const middlewares: any = [routerMiddleware(history)];

// const store = createStore(metaReducers, applyMiddleware(...middlewares));
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
let persistor = persistStore(store);

export { store, persistor };
