
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import categories from "./categories/categoriesSlice"
import products from "./products/productsSlice"
import cart from "./cart/cartSlice"
import wishList from './wishList/wishListSlice'
import { persistStore, persistReducer , FLUSH , REHYDRATE , REGISTER , PAUSE , PERSIST , PURGE} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart']
}
const CartPersistConfig = {
  key: 'cart',
  storage,
  whiteList: ['items']
}

const WishListPersistConfig = {
  key: 'wishList',
  storage,
  whiteList : ['itemsId']
}

const rootReducer = combineReducers({
  categories,
  products,
  wishList : persistReducer(WishListPersistConfig , wishList),
  cart: persistReducer(CartPersistConfig, cart),
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE],
      },
    }),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const persistor = persistStore(store)
export {store , persistor};