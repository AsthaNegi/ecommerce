import {useState,useEffect} from "react";

import {InputBase,Box,List,ListItem,styled} from "@mui/material";

//icons
import SearchIcon from '@mui/icons-material/Search';

import {useSelector,useDispatch} from "react-redux";
import {getProducts} from "../../redux/actions/productActions";
import {Link} from "react-router-dom";

const SearchContainer = styled(Box)`
   margin-left:10px;
   background:#fff;
   width:38%;
   border-radius:2px;
   padding-left:10px;
   ${'' /* // to make placeholder and serach icon on same line  */}
   display:flex;

`;

const InputSearchBase= styled(InputBase)`
  width:100%;
  margin-left:20px;
  font-size:unset;  
  ${'' /* font size will be according to tenant  */}
`;

const SearchIconWrapper = styled(Box)`
  color:black;
  padding:5px;
`;

const ListWrapper=styled(List)`
  position:absolute;
  background:#ffffff;
  color:#000;
  margin-top:36px;
`;

function Search(){
    
    const [text,setText]=useState("");
    
    // fetching the products from the redux store 
    const {products} = useSelector(state=>state.getProducts);
    const dispatch=useDispatch();
    
    // calling the api with the help of useEffect 
    useEffect(()=>{
      dispatch(getProducts());
    },[dispatch]);


    const getText=(Text)=>{
          setText(Text); 
    }

    return(
        <SearchContainer >
            {/* <InputBase/> */}
            <InputSearchBase 
                  placeholder="Search for products,brands and more" 
                  onChange={(e)=>getText(e.target.value)}
                  value={text}
            />
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            {/* we are fetching the list of items which match the text typed in serach box  */}
            {
                text &&
                <ListWrapper>
                   {
                      products.filter(product=>product.title.longTitle.toLowerCase().includes(
                        text.toLowerCase()
                      )).map(product=>(
                         <ListItem>
                            <Link 
                                to={`/product/${product.id}`}
                                onClick={()=>setText("")}
                                style={{textDecoration:"none",color:"inherit"}}
                            >
                                {product.title.longTitle}
                            </Link>
                         </ListItem>
                      ))
                   }
                </ListWrapper>
            }
        </SearchContainer>
    );

}



export default Search;