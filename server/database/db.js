import mongoose from "mongoose";


export const Connection= async (username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.xki5wr4.mongodb.net/ecommerce?retryWrites=true&w=majority`;
    mongoose.connect(URL).then((ans) => {
        console.log(" database Connected Successful")
      }).catch((err) => {
        console.log("Error in the Connection")
        console.log(`${err}`);
      })
      
}




export default Connection;