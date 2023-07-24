import mongoose from "mongoose";


// we are defining schema of our product document  here 
const productSchema=new mongoose.Schema(
    {
        id:{
            type:String,
            required:true,
            unique:true  // this will make sure no duplicate items are entered in the products collection  since every document has //unique id
        },
        url:String,
        detailUrl:String,
        title:Object,
        price:Object,
        quantity:Number,
        description:String,
        discount:String,
        tagline:String
    }
);

const Product = mongoose.model("product",productSchema);

export default Product;