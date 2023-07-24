
import Product from "../model/product-schema.js";

export const getProducts= async (req,res)=>{
  try{
    // fetching all the data from Product model or products collection
    const products= await Product.find({});
    
    // if we are able to fetch all the data 
    // we will send that data to frontend 
    res.status(200).json(products);
  }
  catch(error){
   res.status(500).json({message:error.message});

  }

}

export const getProductById=async(req,res)=>{
  try{
     const id=req.params.id;
     // params is an object which contains url
     const product=await Product.findOne({"id":id})
     // product whose id matches with id 
     res.status(200).json(product);
     // on success we are sending product in json format 
  }
  catch(error){
     res.status(500).json({message:error.message})
  }
}