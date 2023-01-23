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



const CartItems = ({image1,name,cost,quantity,orderId}:cartItems) => {
  const {currentUser}=useSelector((store:any)=>store.authManager)
  const {loginUsersData}=useSelector((store:any)=>store.authManager)
  const dispatch:any = useDispatch()
  const [count,setcount] = useState<number>(1)
  const [cartdata,setcartdata] = useState([])
  const [total,settotal] = useState(0)
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
  
  console.log(orderId,"fsdfa")
  let sum=total;
  const updateTotal = (orderId:string)=>{
    // console.log(orderId)
    if(sum==0){
      for(let i=0;i<loginUsersData.length;i++){
        // sum= sum+(currentUser.cart[i].cost)
        if(loginUsersData[i].id===currentUser.id){
                for(let j=0;j<loginUsersData[i].cart.length;j++){
                   sum=sum+(loginUsersData[i].cart[j].cost)
                }
        }
  }
    }
   
    
    settotal(sum)
    // console.log(total)
    // console.log(count)
    // console.log(total)
    // console.log(orderId)
    // console.log(currentUser.cart)
    dispatch(updateUserCart(total))
    for(let i=0;i<loginUsersData.length;i++){
      // sum= sum+(currentUser.cart[i].cost)
      if(loginUsersData[i].id===currentUser.id){
              for(let j=0;j<loginUsersData[i].cart.length;j++){
                //  sum=sum+(loginUsersData[i].cart[j].cost)
                console.log(loginUsersData[i].cart[j].orderId)
                if(loginUsersData[i].cart[j].orderId===orderId){
                 sum=sum+(loginUsersData[i].cart[j].cost*count)
                  
                     console.log(orderId)
                }
              }
      }
}

    settotal(sum)
    console.log(total)
    dispatch(updateUserCart(total))
  }

  useEffect(()=>{
    updateTotal(orderId)
  },[])
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
        <Button isDisabled={count===1}  bgColor='#3182ce' w="10px" color="white" onClick={()=>setcount(count-1)} variant='ghost' colorScheme='blue'>-</Button>
        <Box>{count}</Box>
        <Button bgColor='#3182ce' w="10px" color="white" onClick={()=>[setcount(count+1),updateTotal(orderId)]} variant='ghost' colorScheme='blue'>+</Button>
        </HStack>
      </HStack>
       
        
        
      
    </CardFooter>
  </Card>
  )
}

export default CartItems