// to call an api we use axios 
import axios from "axios";

import * as actionTypes from "../constants/productConstant";

const URL="http://localhost:8000"; 

// we will call api from here 
export const getProducts= ()=> async (dispatch)=>{
    try{
        // calling the api to this endpoint so reponse object we will get
        // fetching data field from response object
        const {data}=await axios.get(`${URL}/products`);
        
        // dispatching data to products reducer in case of success
        dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS,payload:data});// this will call reducer
    }
    catch(error){
        // sending error
      dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:error.message});
    }
}

export const getProductDetails=(id)=>async(dispatch)=>{
   try{
      dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST});
      const {data}=await axios.get(`${URL}/product/${id}`);
      
      dispatch({type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS,payload:data});

   }
   catch(error){
     dispatch({type:actionTypes.GET_PRODUCT_DETAILS_FAIL,payload:error.message});
   }  

}

// response object :
//response object is returned by the backend
// {
//     config:{},
//     data:[],
//     headers:{},
//     status:200,
//     message:""
// }

// object destructuring 
//obj.data
//{data}=obj;