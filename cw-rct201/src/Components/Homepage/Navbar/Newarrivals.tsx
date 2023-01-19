import React,{useState} from 'react'
import {Box,HStack,Image,Link,VStack,Text,List,ListItem} from "@chakra-ui/react"
import { Display } from './Navbar'
interface Props{
    style:Display,
    over:()=>void,
    leave:()=>void
}

const Newarrivals = ({style,over,leave}:Props) => {

    
  return (
    <>
    <HStack
    p='10px'
    onMouseOver={over} onMouseLeave={leave}
   style={style}
    shadow="md"
    pos="absolute"
    w="100%"
    h="400px"
    m="auto"
   
  >
    <VStack w="20%" h="90%">
      <Text textAlign="left" fontWeight="bold">NEW ARRIVALS</Text>
      <List textAlign="left">
       <ListItem>Desks</ListItem>
       <ListItem>Charging Solution</ListItem>
       <ListItem>Collections</ListItem>
       <ListItem>Macbook Sleeves</ListItem>
       <ListItem>Messenger Bags</ListItem>
       <ListItem>Eyewear Cases</ListItem>
       <ListItem>Watchbands</ListItem>
     </List>
    </VStack>
    <HStack h="100%" justifyContent="space-evenly" w="80%">
      <Box w="30%" h="90%">
        <Image w="100%" h="100%" src="https://images.dailyobjects.com/marche/assets/images/other/recess-collection-dropdown-image-for-new-arrival.jpg?tr=cm-pad_crop,v-2?tr=cm-pad_resize,w-453,dpr-1"></Image>
      </Box>
      <Box w="30%" h="90%">
        <Image w="100%" h="100%" src="https://images.dailyobjects.com/marche/assets/images/other/planner-dropdown-image-for-new-arrival-2-new.jpg?tr=cm-pad_crop,v-2?tr=cm-pad_resize,w-453,dpr-1"></Image>
      </Box>
      <Box w="30%" h="90%">
        <Image w="100%" h="100%" src="https://images.dailyobjects.com/marche/colllectionPage/desk/desk-collection-new-arrival-homepage-carousal.jpg?tr=cm-pad_crop,v-2?tr=cm-pad_resize,w-453,dpr-1"></Image>
      </Box>
    </HStack>
  </HStack>
  </>
  )
}

export default Newarrivals