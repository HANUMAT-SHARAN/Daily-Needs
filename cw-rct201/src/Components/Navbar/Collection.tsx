import React from 'react'
import { Display } from './Navbar'
import {Box,HStack,Image,Link,VStack,Text,List,ListItem} from "@chakra-ui/react"
interface Props{
    style:Display,
    over:()=>void,
    leave:()=>void
}
const Collection = ({style,over,leave}:Props) => {
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
      <Text fontSize="17px" textAlign="left" fontWeight="bold">COLLECTION</Text>
      <List fontSize="17px" textAlign="left" spacing={2}>
       <ListItem><Link>Recess Collection</Link> </ListItem>
       <ListItem><Link>Platform Collection</Link></ListItem>
       <ListItem><Link>Tarp Collection</Link></ListItem>
       <ListItem><Link>Claymen Collection</Link></ListItem>
       <ListItem><Link>Fleet Collection</Link></ListItem>
       <ListItem><Link>Wallet Collection</Link></ListItem>
       
     </List>
    </VStack>
    <VStack w="32%" h="90%" borderRight="1px solid #999">
      <Text fontSize="17px" textAlign="left" fontWeight="bold">STUDIO</Text>
      <List fontSize="17px" textAlign="left" spacing={2}>
      <ListItem><Link>Tarot Collection New</Link> </ListItem>
       <ListItem><Link>DreamScape Collection New</Link></ListItem>
       <ListItem><Link>Mela Collection New</Link></ListItem>
       <ListItem><Link>ArcadePxl Collection New</Link></ListItem>
       <ListItem><Link>Zodiac Collection</Link></ListItem>
       
     </List>
    </VStack>
    <VStack w="32%" h="90%" >
      <Text fontSize="17px" textAlign="left" fontWeight="bold">COLLABORATIONS</Text>
      <List fontSize="17px" textAlign="left" spacing={2}>
      <ListItem><Link>DailyObjects x Smartsters New</Link> </ListItem>
      
       
     </List>
    </VStack>
    
    
    </HStack>
    {/*  */}
    <HStack h="100%" justifyContent="space-evenly" w="45%">
    
      
      <Box w="100%" h="95%">
        <Image w="100%" h="100%" src="https://images.dailyobjects.com/marche/assets/images/homepage/desktop/new-collection-dropdown-desktop-update-2.jpg?tr=cm-pad_crop,v-2,w-1000,w-132,h-380,dpr-1"></Image>
      </Box>
    </HStack>
  </HStack>
  </>
  )
}

export default Collection