import {Typography,Grid,Box,Button,styled} from "@mui/material";
import {useSelector} from "react-redux";

// components 
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";

const Container =styled(Grid)`
  padding:30px 135px;
`;

const Header=styled(Box)`
  padding:15px 24px;
  background:#fff;
`;

const ButtonWrapper=styled(Box)`
  padding:16px 22px;
  background:#fff;
  box-shadow:0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top:1px solid #f0f0f0;
`;

const StyledButton=styled(Button)`
  display:flex;
  margin-left:auto;
  background:#fb641b;
  color:#fff;
  width:250px;
  height:51px;
  border-radius:2px;
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
                        <ButtonWrapper>
                            <StyledButton>Place Order</StyledButton>
                        </ButtonWrapper>
                      </Container>
                      <Grid item lg={3} md={3} sm={12} xs={12}>
                        <TotalView cartItems={cartItems}/>
                      </Grid>
                   </Grid>
                   :<EmptyCart/>
            }
        </>
    );
}

export default Cart;