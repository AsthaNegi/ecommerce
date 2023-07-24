// MUI components 
import {Box,Typography,styled} from "@mui/material";

// components 
import {navData} from "../../constants/data.js";

// styling MUI components 

const Component =styled(Box)(({theme})=>({
    display:"flex",
    margin: "55px 130px 0 130px",
    justifyContent:"space-between",
    overflow:"hidden",
    [theme.breakpoints.down("lg")]:{
      margin:0
    }
  }));

const Container =styled(Box)`
   padding:12px 8px;
   text-align:center;
`;

const Text=styled(Typography)`
     font-size:14px;
     font-weight:600;
     font-family:inherit;
`;

function NavBar(){
    return(
        <Component>
          {
            navData.map(data=>(
               <Container>
                 <img src={data.url} style={{width:64}} alt="nav"/>
                 <Text>{data.text}</Text>
               </Container>
            ))
          }
        </Component> 
    );
}

export default NavBar;