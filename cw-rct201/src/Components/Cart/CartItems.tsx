import React, { useState } from 'react'
import {Heading,Stack,Text,Divider,Button,Box,HStack,Image} from "@chakra-ui/react"
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { setNewCartPrice } from '../../Redux/auth/authAction';
interface cartItems{
    image1:string,
    name:string,
    cost: string
    quantity:number
    orderId:string
}



const CartItems = ({image1,name,cost,quantity,orderId}:cartItems) => {
  const {currentUser}=useSelector((store:any)=>store.authManager)
  const {loginUserData}=useSelector((store:any)=>store.authManager)
 const [total,settotal] =useState<number>(0)
  const [count,setcount] = useState<number>(1)
  const [cartdata,setcartdata] = useState([])
  const getUserData = async () => {
    try {
      let r = await fetch(`http://localhost:4040/users/${currentUser.id}`);
      let d = await r.json();
      // console.log(d.cart)
      setcartdata(d.cart);
    } catch (error) {
      console.log(error);
    }
  };
  const dispatch:any = useDispatch()
  const handledelete=async(orderId:string)=>{
    getUserData()
    try {
      let r=await fetch(`http://localhost:4040/users/${currentUser.id}`,{
      method:"PATCH",
      body : JSON.stringify({
        cart:[cartdata.filter((item:cartItems) => item.orderId !== orderId)
        ]
      }),
      headers:{
        "Content-Type":"application/json"
      }
      })
      let d=await r.json()
      console.log(d)
    } catch (error) {
      console.log(error)
    }
  }
const updateQuantity = (orderId:string)=>{
    
    let sum=0
    for(let i=0;i<currentUser.cart.length;i++){
      sum=sum+(currentUser.cart[i].cost)
} 
console.log(sum)
settotal(sum)
dispatch(setNewCartPrice(total))
    for(let i=0;i<currentUser.cart.length;i++){
          if(currentUser.cart[i].orderId===orderId){
                sum=sum+(currentUser.cart[i].cost*count)
          }
    } 
    settotal(sum)
dispatch(setNewCartPrice(total))
}
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
      <Button onClick={()=>handledelete(orderId)} variant='solid' colorScheme='blue'>
          Remove
        </Button>
        <HStack>
        <Button isDisabled={count===1}  bgColor='#3182ce' w="10px" color="white" onClick={()=>[setcount(count-1)]} variant='ghost' colorScheme='blue'>-</Button>
        <Box>{count}</Box>
        <Button bgColor='#3182ce' w="10px" color="white" onClick={()=>[setcount(count+1),updateQuantity(orderId)]} variant='ghost' colorScheme='blue'>+</Button>
        </HStack>
      </HStack>
       
        
        
      
    </CardFooter>
  </Card>
  )
}

export default CartItems