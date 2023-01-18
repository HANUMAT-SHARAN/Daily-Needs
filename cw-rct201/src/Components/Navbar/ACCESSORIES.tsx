import React from 'react'
import { Display } from './Navbar'
import {Box,HStack,Image,Link,VStack,Text,List,ListItem} from "@chakra-ui/react"

interface Props{
    style:Display,
    over:()=>void,
    leave:()=>void
}
const ACCESSORIES = ({style,over,leave}:Props) => {
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
   
    <HStack w="70%" h="90%" borderRight="1px solid #999">
        
    <VStack w="25%" h="90%" borderRight="1px solid #999">
      <Text fontSize="17px" textAlign="left" fontWeight="bold">WATCH ACCESSORIES</Text>
      <List fontSize="17px" textAlign="left" spacing={2}>
       <ListItem><Link>Apple Watch Cases</Link> </ListItem>
       <ListItem><Link>Apple Watchbands</Link></ListItem>
       <ListItem><Link>Universal Watchbands</Link></ListItem>
       <ListItem><Link>Apple Watch Stands</Link></ListItem>
       
     </List>
    </VStack>
    <VStack w="25%" h="90%" borderRight="1px solid #999">
      <Text fontSize="17px" textAlign="left" fontWeight="bold">SCREEN GUARD</Text>
      <List fontSize="17px" textAlign="left" spacing={2}>
      <ListItem><Link>For Phone</Link> </ListItem>
       <ListItem><Link>For Apple Watch</Link></ListItem>
       <ListItem><Link>For Macbook</Link></ListItem>
       <ListItem><Link>For iPad</Link></ListItem>
       
     </List>
    </VStack>
    <VStack w="25%" h="90%" borderRight="1px solid #999">
      <Text fontSize="17px" textAlign="left" fontWeight="bold">STANDS</Text>
      <List fontSize="17px" textAlign="left" spacing={2}>
      <ListItem><Link>For Apple Watch</Link> </ListItem>
       <ListItem><Link>For Mobile</Link></ListItem>
       <ListItem><Link>For iPad</Link></ListItem>
       <ListItem><Link>For Laptop</Link></ListItem>
       <ListItem><Link>For MagSafe</Link></ListItem>
       <ListItem><Link>For Monitor</Link></ListItem>
       
     </List>
    </VStack>
    <VStack w="25%" h="90%">
      <Text fontSize="17px" textAlign="left" fontWeight="bold">CHARGING SOLUTIONS</Text>
      <List fontSize="17px" textAlign="left" spacing={2}>
      <ListItem><Link>Charging Stations New</Link> </ListItem>
       <ListItem><Link>Chargers and Cables New</Link></ListItem>
       <ListItem><Link>Wireless Chargers</Link></ListItem>
      
     </List>
    </VStack>
    
    </HStack>
    {/*  */}
    <HStack h="100%" justifyContent="space-evenly" w="45%">
    <VStack w="30%" h="90%">
      
      <List fontSize="18px" fontWeight="bold" textAlign="left" spacing={4}>
       <ListItem>ORGANISERS</ListItem>
       <ListItem>PHONE WALLET</ListItem>
       <ListItem>KEYCHAIN</ListItem>
       <ListItem>DRINKWARE</ListItem>
       <ListItem>MASKS</ListItem>
       
     </List>
    </VStack>
      
      <Box w="60%" h="95%">
        <Image w="100%" h="100%" src="https://images.dailyobjects.com/marche/assets/images/other/accessories-update-1.jpg?tr=cm-pad_crop,v-2,w-1000,w-242,h-380,dpr-1"></Image>
      </Box>
    </HStack>
  </HStack>
  </>
  )
}

export default ACCESSORIES