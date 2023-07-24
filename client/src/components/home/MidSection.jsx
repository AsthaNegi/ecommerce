import {imageURL} from "../../constants/data";

import {Grid,styled} from "@mui/material";

const Wrapper=styled(Grid)`
    margin-top:10px;
    justify-content:space-between ;
`;

const Image=styled("img")(({theme})=>(
{
    marginTop:10,
    width:"100%",
    display:"flex",
    justifyContent:"space-between",
    [theme.breakpoints.down("md")]:{
        objectFit:"cover",
        height:120
    }
}
));

const MidSection=()=>{
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    
    return (
        // lg is large , md is medium screen, sm is small , 
        // screen is divided into 12 parts , lg={12} refers that on large screen  an element will occupy 12 parst ie on large screen , 1 parent element will be visible 
       <>

            <Wrapper lg={12} md={12} sm={12} xs={12} container>
                {
                    imageURL.map(image=>(
                        // on large screen 3 children will be visible 
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <img src={image} alt="image" style={{width:"100%"}}/>
                        </Grid>  
                    ))
                }
            </Wrapper>
            <Image src={url} alt="covid"/>

        </>
    );
}

export default MidSection;