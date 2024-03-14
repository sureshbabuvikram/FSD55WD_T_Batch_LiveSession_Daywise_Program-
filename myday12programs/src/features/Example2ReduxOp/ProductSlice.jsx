import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ProductSlice = createSlice({
    name:'produc',
    initialState:{
        data:[],
        status:'idle',
        error:null
    },
    reducers:{
        fetchProductStart:(state)=>{
            state.status='loading'
        },
        fetchProductSucess:(state, action)=>{
            state.status='success'
            state.data= action.payload
        },
        fetchProductFailure:(state, action)=>{
            state.status='failed'
            state.error= action.payload
        },
        // createProductStart:(state)=>{
        //     state.status='loading'
        // },
        // createProductSucess:(state, action)=>{
        //     state.status='success'
        //     state.data= action.payload
        // },
        // createProductFailure:(state, action)=>{
        //     state.status='failed'
        //     state.error= action.payload
        // }
    }
})
//function returns another callback function
export const fetchProduct=()=>async(dispatch)=>{

    dispatch(fetchProductStart())

    try {
        const res= await axios.get('https://65d582ef3f1ab8c63437230e.mockapi.io/api/products')
        dispatch(fetchProductSucess(res.data))
    } catch (error) {
        dispatch(fetchProductFailure(error.message))
    }
}

// export const createProduct=(data)=>async(dispatch)=>{

//     dispatch(createProductStart())

//     try {
//         const res= await axios.post('https://65d582ef3f1ab8c63437230.mockapi.io/api/products', data)
//         dispatch(createProductSucess(res.data))
//     } catch (error) {
//         dispatch(createProductFailure(error.message))
//     }
// }

export const{fetchProductStart, fetchProductSucess, fetchProductFailure}= ProductSlice.actions;
export default ProductSlice.reducer