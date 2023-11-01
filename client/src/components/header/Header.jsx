import {useState} from "react";

import {AppBar,Toolbar,Box,Typography,IconButton,Drawer,List,ListItemButton,styled} from "@mui/material";

import {Menu} from '@mui/icons-material';

//components 
import Search from "./Search";
import CustomButtons from "./CustomButtons";


import {Link} from "react-router-dom";

const StyledHeader=styled(AppBar)`
    ${'' /* background:#2874f0; */}
    background:#72A0C1;
    height:55px;
`
// we changed Box Component into Link Component 
const Component=styled(Link)`
    margin-left:12%;
    line-height:0;
    text-decoration:none;
    color:inherit;
`

const Subheading = styled(Typography)`
    font-size:10px;
    font-style:italic;

`

const PlusImage=styled("img")({
    // css in camel case inside object 
    width:10,
    height:10,
    marginLeft:4
})

const CustomButtonWrapper = styled(Box)(({theme})=>({
  margin:"0 5% 0 auto",
  [theme.breakpoints.down("md")]:{
      display:"none"
  }
}))

const MenuButton=styled(IconButton)(({theme})=>({
  display:"none",
  [theme.breakpoints.down("md")]:{
    display:"block"
  }

}))


function Header(){
    // const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

    const logoURL="https://img.colorxs.com/color-img/air-superiority-blue/color-air-superiority-blue-home-exterior-design-on-color-paint.jpg";

    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    // drawer state is open or close 
    const [open,setOpen]=useState(false);

   const handleOpen=()=>{
      setOpen(true);
   }

   const handleClose=()=>{
     setOpen(false);
   }
        

  return(
        <StyledHeader>
            <Toolbar style={{minHeight:55}}>

               {/* wrapping menu button inside icon button for responsiveness menu optons  */}
            
               {/* hamburger icon will appear when we shirnk the screen  */}
               <MenuButton color="inherit" onClick={handleOpen}>
                    <Menu/>
               </MenuButton>
              {/* open and onClose are props  */}
                <Drawer open={open} onClose={handleClose}> 
                   {
                    <Box style={{width:200}} onClick={handleClose}>
                       <List>
                          <ListItemButton button>
                              <CustomButtons/>
                          </ListItemButton>
                      </List>
                   </Box>
                   }
                </Drawer>
              {/* defining to="" path since Component is now Link component */}                   
               <Component to="/">
                 <img src={logoURL} alt="logo" style={{width:75}} />
                 <Box style={{display:'flex'}}>
                    <Subheading>Explore&nbsp;
                      <Box component="span" style={{color:"#fff"}}>More</Box>
                    </Subheading>
                    <PlusImage src={subURL} alt="sub-logo"/>
                 </Box>
               </Component>
               <Search/>
               <CustomButtonWrapper>
                    <CustomButtons/>
               </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>  
   );
}


export default Header;

