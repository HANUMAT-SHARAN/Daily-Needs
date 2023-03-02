<<<<<<< HEAD

import {
  Heading,
  Stack,
  Text,
  Divider,
  Button,
  Box,
  HStack,
  Image,
} from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";

interface cartItems {
  image1: string;
  name: string;
  cost: string;
  quantity: number;
  orderId: any;
}
type Props = {
  objProp:cartItems,
  funcProp:(orderId:string)=>void
  funcquant:(orderId:string,num:number)=>void
}
const CartItems = ({ objProp, funcProp,funcquant }:Props) => {
  const {orderId,name,cost,quantity,image1} = objProp;
 
  
=======
import React, { useState,useEffect } from 'react'
import {Heading,Stack,Text,Divider,Button,Box,HStack,Image} from "@chakra-ui/react"
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { updateUserCart } from '../../Redux/auth/authAction';
interface cartItems{
    image1:string,
    name:string,
    cost: string
    quantity:number
    orderId:any
    
}
type Props = {
  objProp:cartItems,
  funcProp:(orderId:string)=>void
  funcquant:(orderId:string,num:number)=>void
}


const CartItems = ({ objProp, funcProp,funcquant }:Props) => {
  const {orderId,name,cost,quantity,image1} = objProp;
  const {currentUser}=useSelector((store:any)=>store.authManager)
  const {loginUsersData}=useSelector((store:any)=>store.authManager)
  const dispatch:any = useDispatch()
  const [count,setcount] = useState<number>(1)
 
  const [total,settotal] = useState(0)
  
 
 
  
//   console.log(quantity,"q")
//   let sum=total;
//   const updateTotal = (orderId:string)=>{
   
//     if(sum===0){
//       for(let i=0;i<loginUsersData.length;i++){
       
//         if(loginUsersData[i].id===currentUser.id){
//                 for(let j=0;j<loginUsersData[i].cart.length;j++){
//                    sum=sum+(loginUsersData[i].cart[j].cost)
//                 }
//         }
//   }
//     }
   
    
//     settotal(sum)
   
//     dispatch(updateUserCart(total))
//     for(let i=0;i<loginUsersData.length;i++){
//       // sum= sum+(currentUser.cart[i].cost)
//       if(loginUsersData[i].id===currentUser.id){
//               for(let j=0;j<loginUsersData[i].cart.length;j++){
//                 //  sum=sum+(loginUsersData[i].cart[j].cost)
//                 // console.log(loginUsersData[i].cart[j].orderId)
//                 if(loginUsersData[i].cart[j].orderId===orderId){
//                  sum=sum+(loginUsersData[i].cart[j].cost*count)
                  
//                     //  console.log(orderId)
//                 }
//               }
//       }
// }

//     settotal(sum)
//     // console.log(total)
//     dispatch(updateUserCart(total))
//   }

  // useEffect(()=>{
  //   updateTotal(orderId)
  // },[])
>>>>>>> master
  return (
    <Card h="auto" >
    <CardBody>
      <Image
        src={image1}
        alt='error'
        borderRadius='lg'
      />
      <Stack mt='2' spacing='3'>
        <Heading textAlign={"center"} size='md'>{name}</Heading>
        
        <Text align={"center"} color='blue.600' fontSize='2xl'>
        {cost}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <HStack justifyContent={"space-between"} gap="30px">
      <Button onClick={()=>funcProp(orderId)} variant='solid' colorScheme='blue'>
          Remove
        </Button>
        <HStack>
        <Button isDisabled={quantity===1}  bgColor='#3182ce' w="10px" color="white" onClick={()=>funcquant(orderId,-1)} variant='ghost' colorScheme='blue'>-</Button>
        <Box>{quantity}</Box>
        <Button bgColor='#3182ce' w="10px" color="white" onClick={()=> funcquant(orderId,1)} variant='ghost' colorScheme='blue'>+</Button>
        </HStack>
      </HStack>
       
        
        
      
    </CardFooter>
  </Card>
  )
};

<<<<<<< HEAD
export default CartItems;
=======
export default CartItems


>>>>>>> master
