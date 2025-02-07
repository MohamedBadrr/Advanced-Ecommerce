
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import categories from "./categories/categoriesSlice"
import products from "./products/productsSlice"
import cart from "./cart/cartSlice"
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

const rootReducer = combineReducers({
  categories,
  products,
  cart: persistReducer(CartPersistConfig, cart)
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