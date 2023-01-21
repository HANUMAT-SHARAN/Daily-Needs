import React from 'react'
import { Display } from './Navbar'
import {Box,HStack,Image,Link,VStack,Text,List,ListItem} from "@chakra-ui/react"

interface Props{
    style:Display,
    over:()=>void,
    leave:()=>void
}
const Bags = ({style,over,leave}:Props) => {
  return (
    <>
    <HStack
    p='10px'
    zIndex={1}
    onMouseOver={over} onMouseLeave={leave}
   style={style}
    shadow="md"
    pos="absolute"
    w="100%"
    h="400px"
    m="auto"
    bgColor="white"
  >
   
    <HStack w="55%" h="90%" borderRight="1px solid #999">
        
    <VStack w="32%" h="90%" borderRight="1px solid #999">
      <Text fontSize="17px" textAlign="left" fontWeight="bold">WALLETS</Text>
      <List fontSize="17px" textAlign="left" spacing={2}>
       <ListItem><Link>Women's Wallets</Link> </ListItem>
       <ListItem><Link>Card Wallets</Link></ListItem>
       <ListItem><Link>Men's Wallets</Link></ListItem>
       <ListItem><Link>Phone Wallets</Link></ListItem>
       <ListItem><Link>Bi-Fold Wallets</Link></ListItem>
       
     </List>
    </VStack>
    <VStack w="32%" h="90%" borderRight="1px solid #999">
      <Text fontSize="17px" textAlign="left" fontWeight="bold">CROSSBODY BAG</Text>
      <List fontSize="17px" textAlign="left" spacing={2}>
      <ListItem><Link>Tarp</Link> </ListItem>
       <ListItem><Link>Box</Link></ListItem>
       <ListItem><Link>Scout</Link></ListItem>
       <ListItem><Link>Trapeze</Link></ListItem>
       <ListItem><Link>Orbis</Link></ListItem>
       
     </List>
    </VStack>
    <VStack w="32%" h="90%" >
      <Text fontSize="17px" textAlign="left" fontWeight="bold">TOTE BAG</Text>
      <List fontSize="17px" textAlign="left" spacing={2}>
      <ListItem><Link>Tarp</Link> </ListItem>
       <ListItem><Link>Buoyant</Link></ListItem>
       <ListItem><Link>Classic</Link></ListItem>
       <ListItem><Link>Fatty</Link></ListItem>
       
       
     </List>
    </VStack>
    
    
    </HStack>
    {/*  */}
    <HStack h="100%" justifyContent="space-evenly" w="45%">
    <VStack w="45%" h="90%">
       <List fontSize="18px" fontWeight="bold" textAlign="left" spacing={4}>
       <ListItem>ORGANISERS</ListItem>
       <ListItem>PHONE WALLET</ListItem>
       <ListItem>KEYCHAIN</ListItem>
       <ListItem>DRINKWARE</ListItem>
       <ListItem>MASKS</ListItem>
       
     </List>
    </VStack>
      
      <Box w="60%" h="95%">
        <Image w="100%" h="100%" src="https://images.dailyobjects.com/marche/assets/images/other/bags-and-wallets-dropdown-update-4.jpg?tr=cm-pad_crop,v-2,w-1000,w-117,h-380,dpr-1"></Image>
      </Box>
    </HStack>
  </HStack>
  </>
  )
}

export default Bags