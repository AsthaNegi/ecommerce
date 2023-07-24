
import {Typography,Box,Table,TableBody,TableRow,TableCell,styled} from "@mui/material";

import {LocalOffer as Badge} from '@mui/icons-material';

const SmalleText=styled(Box)`
  font-size:14px;
  vertical-align:baseline;
  & > p{
      font-size:14px;
      margin-top:10px;
  }

`;

const StyledBadge=styled(Badge)`
   margin-right:10px;
   color: #00CC00;
   font-size:15px;
  
`;

const ColumnText=styled(TableRow)`
  font-size:14px;
  vertical-align:baseline;
  & > td{
    font-size:14px;
    margin-top:10px;
    border:none;
  }
`;




const ProductDetail=({product})=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    // const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    const adURL="https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

    const date=new Date(new Date().getTime()+(5*24*60*60*1000));

  return(
    <>
        <Typography>{product.title.longTitle}</Typography>
        <Typography>
            & Ratings & 1 Reviews 
            <Box component="span"><img src={fassured} style={{width:77,marginLeft:20}}/></Box>
        </Typography>
        <Typography>
                <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:"#878787"}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:"#388E3C"}}>{product.price.discount}</Box>
        </Typography>  
        <Typography>Available Offers</Typography>
        <SmalleText>
                <Typography><StyledBadge/>Bank OfferFlat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹39,999 T&C</Typography>
                <Typography><StyledBadge/>Bank OfferFlat ₹3,000 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹40,000 to ₹49,999T&C</Typography>
                <Typography><StyledBadge/>Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C</Typography>
                <Typography><StyledBadge/>Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More</Typography>
                <Typography><StyledBadge/>Partner OfferApply & get ₹10,000 Times Prime benefits + ₹1,000 Gift Card* with Flipkart Axis Bank Credit Card</Typography>
        </SmalleText>
        <Table>
            <TableBody>
              <ColumnText>
                 <TableCell style={{color:"#878787"}}>Delivery</TableCell>
                 <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()}</TableCell>
              </ColumnText>
              <ColumnText>
                 <TableCell style={{color:"#878787"}}>Warranty</TableCell>
                 <TableCell>1 Year</TableCell>
              </ColumnText>
              <ColumnText>
                 <TableCell style={{color:"#878787"}}>Seller</TableCell>
                 <TableCell>
                      <Box component="span" style={{color:"#2874f0"}}>SuperComNet</Box>
                      <Typography>GST invoice available</Typography>
                      <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                 </TableCell>
              </ColumnText>
              <ColumnText>
                  <TableCell colSpan={2}>
                     <img src={adURL} style={{width:390}} alt="flipkartpoints"/>
                  </TableCell>
              </ColumnText>
              <ColumnText>
                 <TableCell style={{color:"#878787"}}>Description</TableCell>
                 <TableCell>{product.description}</TableCell>
              </ColumnText>
            </TableBody>
        </Table>
    </>
  );
}  


export default ProductDetail;