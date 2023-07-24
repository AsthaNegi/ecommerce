import {Dialog,Box,TextField,Typography,Button,styled} from "@mui/material";

//usestate to switch login & sign up wrapper 
import {useState,useContext} from "react";

import {authenticateSignup,authenticateLogin} from "../../service/api";
import {DataContext} from "../../context/DataProvider";

const Component =styled(Box)`
     height:70vh;
     width:90vh;
`;

const Image=styled(Box)`
     background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
     height:81.7%;
     width:25%;
     padding:45px 35px;
     &>p,&>h5{
        color:#ffffff;
        font-weight:600;
     }
`;

const Wrapper=styled(Box)`
    display:flex;
    flex-direction:column;
    padding:20px 35px;
    flex:1;
    & > div,& > p, &>button{
        margin-top:20px;
    }
   
`;

const LoginButton=styled(Button)`
   text-transform:none;
   background:#FB641B;
   color:#fff;
   height:48px;
   border-radius:2px;
`;

const RequestOTP=styled(Button)`
   text-transform:none;
   background:#fff;
   color:#2874f0;
   height:48px;
   border-radius:2px;
   box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%)
`;

const Text=styled(Typography)`
   font-size:12px;
   color:#878787;

`;

const CreateAccount=styled(Typography)`
   font-size:14px;
   text-align:center;
   color:#2874f0;
   font-weight:600;
   cursor:pointer;
   ${'' /* cursor pointer helps in making it clickable  */}

`;

const Error=styled(Typography)`
    font-size:10px;
    color:#ff6161;
    line-height:0;
    margin-top:10px;
    font-weight:600
`;

const accountInitialValues={
    login:{
        view:"login",
        heading:"Login",
        subHeading:"Get access to your Orders, Wishlist and Recommendations"
    },
    signup:{
        view:"signup",
        heading:"Looks like you're new here!",
        subHeading:"Sign up with your mobile number to get started"
    }
}

const signupInitialValues={
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    phone:""
}


const loginInitialValues={
    username:"",
    password:""
}

// open passed as promps 
const LoginDialog =({open,setOpen})=>{

    const [account,toggleAccount]=useState(accountInitialValues.login);
    const [signup,setSignup]=useState(signupInitialValues);
    const [login,setLogin]=useState(loginInitialValues);
    const [error,setError]=useState(false);

    const {setAccount}=useContext(DataContext);

    const handleClose=()=>{
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    }

    function toggleSignup(){
        toggleAccount(accountInitialValues.signup);
    }

    function onInputChange(event){
        setSignup({...signup,[event.target.name]:event.target.value});
        console.log(signup);
    }

    async function signupUser(){
        let response = await authenticateSignup(signup);
        if(!response)return;
        handleClose();
        setAccount(signup.firstname);
    }


  function onValueChange(event){
     setLogin({...login,[event.target.name]:event.target.value});
  }

  async function loginUser(){
      let response=await authenticateLogin(login);
      console.log(response);
      if(response.status===200){
        handleClose();
        setAccount(response.data.data.firstname);
      }
      else{
          setError(true);
      }

  }


    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:"unset"}}}>
           <Component>
                <Box style={{display:"flex",height:"100%"}}>
                    <Image>
                        <Typography>{account.heading}</Typography>
                        <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
                    </Image>

                    {  account.view === "login"?
                        <Wrapper>
                            <TextField variant="standard" onChange={onValueChange}  name="username" label="Enter username"/>
                            {error&&<Error>Please Enter valid username or password</Error>}
                            <TextField variant="standard" onChange={onValueChange}  name="password" label="Enter password"/>
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                            <LoginButton onClick={loginUser}>Login</LoginButton>
                            <Typography style={{textAlign:"center"}}>OR</Typography>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={toggleSignup}>New to Flipkart? Create an account</CreateAccount>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant="standard" style={{marginTop:-10}} onChange={onInputChange}
                            name="firstname" label="Enter Firstname"/>
                            <TextField variant="standard"onChange={onInputChange} name="lastname" label="Enter Lastname"/>
                            <TextField variant="standard" onChange={onInputChange} name="username" label="Enter Username"/>
                            <TextField variant="standard" onChange={onInputChange}  name="email" label="Enter Email"/>
                            <TextField variant="standard" onChange={onInputChange}  name="password" label="Enter Password"/>
                            <TextField variant="standard" onChange={onInputChange} name="phone" label="Enter Phone"/>
                            <LoginButton onClick={signupUser}>Continue</LoginButton>
                           
                        </Wrapper>


                    }
                   
                </Box>    
           </Component>
        </Dialog>
    );
}

export default LoginDialog;