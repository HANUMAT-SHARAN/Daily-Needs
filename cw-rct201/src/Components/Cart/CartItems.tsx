import React, { useState } from 'react'
import {Heading,Stack,Text,Divider,Button,Box,HStack,Image} from "@chakra-ui/react"
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
interface cartItems{
    // Image1:string,
    // name:string,
    // cost: string
    handletotal:(temp:number)=>void
}



const CartItems = (handletotal:cartItems) => {
  const [count,setcount] = useState<number>(1)

const handledelete = async ()=>{
    let res = await fetch(`http://localhost:4040/users/${currentuser.id}`,{
      
    })

}
  
  return (
    <Card h="auto" >
    <CardBody>
      <Image
        src="https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg"
        alt='error'
        borderRadius='lg'
      />
      <Stack mt='2' spacing='3'>
        <Heading textAlign={"center"} size='md'>samsung</Heading>
        
        <Text align={"center"} color='blue.600' fontSize='2xl'>
        Price:- 200
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <HStack justifyContent={"space-between"} gap="30px">
      <Button variant='solid' colorScheme='blue'>
          Remove
        </Button>
        <HStack>
        <Button isDisabled={count===1}  bgColor='#3182ce' w="10px" color="white" onClick={handletotal(count)} variant='ghost' colorScheme='blue'>-</Button>
        <Box>{count}</Box>
        <Button bgColor='#3182ce' w="10px" color="white" onClick={()=>setcount(count+1)} variant='ghost' colorScheme='blue'>+</Button>
        </HStack>
      </HStack>
       
        
        
      
    </CardFooter>
  </Card>
  )
}

export default CartItems