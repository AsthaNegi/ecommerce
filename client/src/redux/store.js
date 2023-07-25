import {legacy_createStore as createStore,combineReducers,applyMiddleware} from "redux";


//middleware from thunk 
import thunk from "redux-thunk";

// devtools extension
import {composeWithDevTools} from "redux-devtools-extension";

import {getProductsReducer,getProductDetailsReducer} from "./reducers/productReducer";
import {cartReducer} from "./reducers/cartReducer";


// taking multiple reducers and making it as single entity
const reducers=combineReducers({
    getProducts:getProductsReducer,
    getProductDetails:getProductDetailsReducer,
    cart:cartReducer
});

//initialising middleware 
const middleware=[thunk];




//Making a local store to be connected with frontend store 
const store=createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;