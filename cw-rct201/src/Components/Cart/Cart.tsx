import React, { useState, useEffect } from 'react'
import { useSelector,useDispatch } from "react-redux";
import { Box, Grid, HStack, Button, Text, VStack } from "@chakra-ui/react"
import CartItems from './CartItems'
import { BsBagCheckFill } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi"
import { Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

interface cartItems {
  image1: string,
  name: string,
  cost: number
  quantity: number
  orderId: any
}
const Cart = () => {
  const dispatch = useDispatch()
  const [cartdata, setcartdata] = useState<cartItems[]>([])
  const { currentUser } = useSelector((store: any) => store.authManager)
  // const { totalprice } = useSelector((store: any) => store.authManager)
  const [total,settotal] = useState<number>(0)

  const handletotal = ()=>{
    var temp = cartdata
      let sum:number =0
      
        for(let i=0;i<temp.length;i++){
    
          sum+=temp[i].cost*temp[i].quantity
          
        }
        console.log(sum)
        settotal(sum)
  }


  const getUserData = async () => {
    try {
      
      let r = await axios.get(`http://localhost:4040/users/${currentUser.id}`);
      let d = r.data
      setcartdata(d.cart)
    
      handletotal()
    
    } catch (error) {
      console.log(error);
    }
    
  };

  const handledelete = async (orderId: string) => {
     try {
       let r = await axios.patch(`http://localhost:4040/users/${currentUser.id}`, { cart: cartdata.filter((item: cartItems) => item.orderId !== orderId) })
       
       setcartdata(r.data)
       getUserData()
       
      } catch (error) {
        console.log(error)
      }
    }

    const handlequant = async (orderId: string,num:number) => {
      
        let temp = cartdata
         

        for(let i=0;i<cartdata.length;i++){
       
          if(temp[i].orderId==orderId){
                temp[i].quantity+=num
            }
          }
      
      try {
        let r = await axios.patch(`http://localhost:4040/users/${currentUser.id}`, { cart: temp })
        
        setcartdata(r.data)
        getUserData()
       } catch (error) {
         console.log(error)
       }
     }
      setTimeout(()=>{
      handletotal()
     },100)
    
  useEffect(() => {
    getUserData()
  
  }, [])
  return (

    <Box>
      <HStack h="60px" w="100%" p="10px 30px" justify="center" borderBottom={"2px solid #999"} alignItems="center">
        <Box ><BsBagCheckFill style={{ color: "#161636" }} size="35px" /></Box>
        <Text color="#161636" fontWeight={"bold"} fontSize="20px">SHOPING BAG</Text>

      </HStack>

      <HStack justifyContent={"space-between"} p="10px 30px" mt="20px" w="100%" h="auto">
        <Grid w="60%" h="auto" p="10px 40px" templateColumns={"repeat(2,40%)"} gap="40px" border="1px solid #999" >
          {cartdata && cartdata.length > 0 && cartdata.map((e: any) => <CartItems objProp={e} funcProp={handledelete} funcquant={handlequant} />)}

        </Grid>
        <VStack borderRadius={"5px"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" border="1px solid #161636" gap="20px" h="200px" w="30%">
          <Text color="#161636" fontWeight={"bold"} fontSize="20px" mt="10%">Total price :- {"    "}{total} </Text>
          <Link to="/checkout"> <Button bgColor="#161636" w="70%" color="white"><BiLockAlt size="20px" />CHECKOUT</Button></Link>
        </VStack>
      </HStack>

    </Box>
  )
}

export default Cart