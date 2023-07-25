import {Typography,Grid,Box,styled} from "@mui/material";
import {useSelector} from "react-redux";

// components 
import CartItem from "./CartItem";
import TotalView from "./TotalView";

const Container =styled(Grid)`
  padding:30px 135px;
`;

const Header=styled(Box)`
  padding:15px 24px;
`;

const Cart=()=>{

    const {cartItems} = useSelector(state=>state.cart);

    return(
        <>
            {
                cartItems.length?
                   <Grid container >
                      <Container item lg={9} md={9} sm={12} xs={12}>
                        <Header>
                            <Typography>My Cart ({cartItems.length})</Typography>
                        </Header>
                        {
                            cartItems.map(item=>(
                               <CartItem item={item}/>
                            ))
                        }
                      </Container>
                      <Grid item lg={3} md={3} sm={12} xs={12}>
                        <TotalView/>
                      </Grid>
                   </Grid>
                   :<div>Empty</div>
            }
        </>
    );
}

export default Cart;