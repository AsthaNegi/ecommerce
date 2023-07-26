import axios from "axios";

const URL="http://localhost:8000";


// the sigup state data is sent in the api 
export const authenticateSignup= async (data)=>{
    try{
        return await axios.post(`${URL}/signup`,data);
    }
    catch(error){
        console.log("Error while calling signup api",error);
    }
}

export const authenticateLogin= async (data)=>{
    try{
        return await axios.post(`${URL}/login`,data);
    }
    catch(error){
        console.log("Error while calling login api",error);
        return error.response;
    }
}


export const payUsingPaytm =async(data)=>{
   try{
    // api call will return a responce object which will contain data key 
    //  post api call since we are sending some data from the frontend 
     let response=await axios.post(`${URL}/payment`,data);
     return response.data;
   
   }catch(error){
      console.log("error while calling payment api",error);
   }
}
