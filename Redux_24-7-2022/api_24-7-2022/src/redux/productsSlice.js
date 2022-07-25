
//import axios from 'axios';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


// First, create the thunk
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_,thunkAPI) => {
    const res = await fetch("http://fakestoreapi.com/products");
    const data=await res.json();
    return data;
    // axios.get("http://fakestoreapi.com/products")
    //return response.data
  }
)


export const productSlice = createSlice({
  name: 'products',
  initialState: {
   data:[],
   status:null,
  },
  reducers: {
  },
  extraReducers:{
[fetchProducts.fulfilled]:(state,action)=>{
    state.data=action.payload;
    state.status="Success";

},
[fetchProducts.pending]:(state)=>{
    state.status="Loading";
},
[fetchProducts.rejected]:(state)=>{
    state.status="Failed";
},
  }
    
})



export default productSlice.reducer