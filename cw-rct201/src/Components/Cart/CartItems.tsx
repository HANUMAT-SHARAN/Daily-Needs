import React, { useState } from 'react'
import {Heading,Stack,Text,Divider,Button,Box,HStack,Image} from "@chakra-ui/react"
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import { useSelector } from "react-redux";

interface cartItems{
    Image1:string,
    name:string,
    cost: string
    quantity:number
}



const CartItems = ({Image1,name,cost,quantity}:cartItems) => {
  const {currentUser}=useSelector((store:any)=>store.authManager)

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
  const handledelete=async(name:string)=>{
    getUserData()
    try {
      let r=await fetch(`http://localhost:4040/users/${currentUser.id}`,{
      method:"PATCH",
      body : JSON.stringify({
        cart:[cartdata.filter((item:cartItems) => item.name !== name)
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
  
  return (
    <Card h="auto" >
    <CardBody>
      <Image
        src={Image1}
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
      <Button onClick={()=>handledelete(name)} variant='solid' colorScheme='blue'>
          Remove
        </Button>
        <HStack>
        <Button isDisabled={count===1}  bgColor='#3182ce' w="10px" color="white" onClick={()=>setcount(count-1)} variant='ghost' colorScheme='blue'>-</Button>
        <Box>{quantity}</Box>
        <Button bgColor='#3182ce' w="10px" color="white" onClick={()=>setcount(count+1)} variant='ghost' colorScheme='blue'>+</Button>
        </HStack>
      </HStack>
       
        
        
      
    </CardFooter>
  </Card>
  )
}

export default CartItems