import {products} from "./constants/data.js";
import Product from "./model/product-schema.js";


const DefaultData= async()=>{
   try{
      
      await Product.insertMany(products);
      console.log("imported default products data successfully in db");
   }
   catch(error){
      console.log("Error in inserting default data",error.message);
   }

} 


export default DefaultData;