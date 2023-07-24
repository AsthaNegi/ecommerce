import * as actionTypes from "../constants/productConstant";



// action will catch the object sent through dispatch
export const getProductsReducer=(state ={products:[]},action)=>{
  switch(action.type){
    case actionTypes.GET_PRODUCTS_SUCCESS:
        return {products:action.payload}
    case actionTypes.GET_PRODUCTS_FAIL:
         return {error:action.payload}
    default:
        return state; 
        // state is sending empty array of products to stop UI from breaking in case of error    
  }

}

export const getProductDetailsReducer=(state={product:{}},action)=>{
   
   switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
          return {loading:true}
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
          return {loading:false,product:action.payload}
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
          return {loading:false,error:action.payload}
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
          return {product:{}}
        default:
          return state  
  
   }


}





