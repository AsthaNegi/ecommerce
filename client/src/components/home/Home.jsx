import {useEffect} from "react";


import {Fragment} from "react";
import {Box,styled} from "@mui/material";


// components 
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";


import {getProducts} from "../../redux/actions/productActions";
import {useDispatch,useSelector} from "react-redux";


const Component =styled(Box)`
  padding: 10px;
  background:#F2F2F2;
`;




// we cannot return more than one parent component in jsx so we need to wrap them inside div   


function Home(){

  const {products}=useSelector(state=>state.getProducts);// this getProducts is the reducer getProducts from the redux store's state


  const dispatch=useDispatch(); // we will have to dispatch the getProducts function because it's a reducer function not a normal function 

  // useEffect takes 2 arguments : a callback function and second the condition at which the useEffect will be called 
   useEffect(()=>{
     dispatch(getProducts());
   },[dispatch]);
   // empty array [] represents the condition of deadmount ie when the component is rendered, [dispatch] represents the dispatch condition getUpdate function so that on dispatching the new values will be fetched and useEffect will be changed 

    return(
        <Fragment>
            <NavBar/>
            <Component>
              <Banner/>
              <MidSlide products={products} title="Deal of the Day" timer={true}/>
              <MidSection/>
              <Slide products={products} title="Discounts for you" timer={false}/>
              <Slide products={products} title="Suggesting Items" timer={false}/>
              <Slide products={products} title="Top Selections" timer={false}/>
              <Slide products={products} title="Recommended Items" timer={false}/>
              <Slide products={products} title="Trending Offers" timer={false}/>
              <Slide products={products} title="Season's top picks" timer={false}/>
              <Slide products={products} title="Top Deals on Accessories" timer={false}/>
              
            </Component>   
        </Fragment>
    );
}


export default Home;