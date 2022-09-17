import {configureStore, combineReducers} from '@reduxjs/toolkit'
import type {PreloadedState} from '@reduxjs/toolkit'
import productReducer from './reducers/productSlice'

const rootReducer = combineReducers({
  product: productReducer
})

export function store(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
