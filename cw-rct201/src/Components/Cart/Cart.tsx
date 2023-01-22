import React, { useState } from 'react'
import {Box,Grid,HStack,Button,Text,VStack} from "@chakra-ui/react"
import CartItems from './CartItems'
import { BsBagCheckFill } from "react-icons/bs";
import {BiLockAlt} from "react-icons/bi"
const Cart = () => {
       const [total,settotal] = useState<number>(0)
    //  const handletotal =(temp:number)=>{
    //     settotal((pre)=> pre+=temp)
    //  }

  return (

    <Box>
        <HStack h="60px" w="100%" p="10px 30px" justify="center" borderBottom={"2px solid #999"} alignItems="center">
            <Box ><BsBagCheckFill style={{color:"#161636"}} size="35px"/></Box>
            <Text color="#161636" fontWeight={"bold"}  fontSize="20px">SHOPING BAG</Text>
            {/* <Button bgColor="#161636" color="white">Procede to checkout</Button> */}
        </HStack>
        
        <HStack justifyContent={"space-between"} p="10px 30px" mt="20px" w="100%" h="auto">
        <Grid w="60%" h="auto" p="10px 40px" templateColumns={"repeat(2,40%)"} gap="40px" border="1px solid #999" >
            <CartItems    />
            <CartItems   />
        </Grid>
        <VStack pos="absolute" borderRadius={"5px"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" border="1px solid #161636" gap="20px" h="200px"  top="180px" left="65%" w="30%">
            <Text color="#161636" fontWeight={"bold"} fontSize="20px" mt="10%">Total price :- {"    "} {total}</Text>
            <Button  bgColor="#161636" w="70%" color="white"><BiLockAlt size="20px" />CHECKOUT</Button>
        </VStack>
        </HStack>
        
    </Box>
  )
}

export default Cart