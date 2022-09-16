import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'
import {fetchData} from '../../services/api'
import {ResponseDataType} from '../../services/types'
interface iStateType {
  isLoading: Boolean
  error: string | null
  productData: ResponseDataType
}

export const fetchProduct = createAsyncThunk('product/fetchProductData', async () => {
  try {
    const data: ResponseDataType = await fetchData()
    console.log(data)
    return data
  } catch (error) {
    return Promise.reject(error)
  }
})

const initialState: iStateType = {
  isLoading: true,
  error: null,
  productData: []
}
export const productSlice = createSlice({
  name: 'product',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    fetchProductData: (state) => {
      state.productData = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, {payload}) => {
      state.isLoading = true
    })
    builder.addCase(fetchProduct.fulfilled, (state, {payload}) => {
      state.isLoading = true
      state.productData = payload
    })
  }
})
//export const {fetchProductData} = productSlice.actions
export default productSlice.reducer
