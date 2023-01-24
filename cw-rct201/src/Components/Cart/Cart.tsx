import React, { useState,useEffect} from 'react'
import { useSelector } from "react-redux";
import {Box,Grid,HStack,Button,Text,VStack} from "@chakra-ui/react"
import CartItems from './CartItems'
import { BsBagCheckFill } from "react-icons/bs";
import {BiLockAlt} from "react-icons/bi"
import { Link } from 'react-router-dom';
const Cart = () => {
  const [cartdata,setcartdata] = useState([])
  const {currentUser}=useSelector((store:any)=>store.authManager)
  const {totalprice}=useSelector((store:any)=>store.authManager)
  console.log(totalprice,"fsadf")
  const getUserData = async () => {
    try {
      let r = await fetch(`https://backendsirver-for-daily-needs.vercel.app/users/${currentUser.id}`);
      let d = await r.json();
      // console.log(d.cart)
      setcartdata(d.cart);
    } catch (error) {
      console.log(error);
    }
  };
 
  useEffect(()=>{
    getUserData()
  },[])
  return (

    <Box>
        <HStack h="60px" w="100%" p="10px 30px" justify="center" borderBottom={"2px solid #999"} alignItems="center">
            <Box ><BsBagCheckFill style={{color:"#161636"}} size="35px"/></Box>
            <Text color="#161636" fontWeight={"bold"}  fontSize="20px">SHOPING BAG</Text>
            {/* <Button bgColor="#161636" color="white">Procede to checkout</Button> */}
        </HStack>
        
        <HStack justifyContent={"space-between"} p="10px 30px" mt="20px" w="100%" h="auto">
        <Grid w="60%" h="auto" p="10px 40px" templateColumns={"repeat(2,40%)"} gap="40px" border="1px solid #999" >
           {cartdata.map((e:any)=>  <CartItems {...e}  />  )}   
            
        </Grid>
        <VStack borderRadius={"5px"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" border="1px solid #161636" gap="20px" h="200px"   w="30%">
            <Text color="#161636" fontWeight={"bold"} fontSize="20px" mt="10%">Total price :- {"    "}{totalprice} </Text>
           <Link to="/checkout"> <Button  bgColor="#161636" w="70%" color="white"><BiLockAlt size="20px" />CHECKOUT</Button></Link>
        </VStack>
        </HStack>
        
    </Box>
  )
}

export default Cart