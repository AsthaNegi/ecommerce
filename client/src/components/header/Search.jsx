import {InputBase,Box,styled} from "@mui/material";

//icons
import SearchIcon from '@mui/icons-material/Search';

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

function Search(){

    return(
        <SearchContainer >
            {/* <InputBase/> */}
            <InputSearchBase placeholder="Search for products,brands and more" />

            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
        </SearchContainer>
    );

}

export default Search;