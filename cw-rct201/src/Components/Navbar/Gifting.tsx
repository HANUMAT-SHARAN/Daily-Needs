import React from 'react'
import { Display } from './Navbar'
import {Box,HStack,Image,Link,VStack,Text,List,ListItem} from "@chakra-ui/react"
interface Props{
    style:Display,
    over:()=>void,
    leave:()=>void,
}
const Gifting = ({style,over,leave}:Props) => {
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
   
    <HStack w="70%" h="90%" borderRight="1px solid #999">
        
    <VStack w="25%" h="90%" borderRight="1px solid #999">
      <Image src="https://images.dailyobjects.com/marche/corporate-page/corporate-gifting-icon-for-desktop-vw.png?tr=cm-pad_resize,v-2,w-131,h-31,dpr-1"/>
      <List fontSize="17px" textAlign="left" spacing={2}>
       <ListItem><Link>Employee Kits</Link> </ListItem>
       <ListItem><Link>Festive Kits</Link></ListItem>
      
       
     </List>
    </VStack>
    <VStack w="25%" h="90%" borderRight="1px solid #999">
    <Text fontSize="14px" textAlign="left" fontWeight="bold">HOLIDAY GIFTING BUNDLES</Text>
      <Text fontSize="17px" textAlign="left" fontWeight="bold">E-GIFT CARDS</Text>
      
    </VStack>
    <VStack w="25%" h="90%" >
      <Text fontSize="14px" textAlign="left" fontWeight="bold">GIFTS BY BUDGET</Text>
      <List fontSize="17px" textAlign="left" spacing={2}>
      <ListItem><Link>Gifts Under 500</Link> </ListItem>
       <ListItem><Link>Gifts Under 1000</Link></ListItem>
       <ListItem><Link>Gifts Under 2500</Link></ListItem>
       <ListItem><Link>Trays & Coasters</Link></ListItem>
       
       
     </List>
    </VStack>
    <VStack w="25%" h="90%" >
      <Text fontSize="14px" textAlign="left" fontWeight="bold">GIFTS BY PERSONAS</Text>
      <List fontSize="17px" textAlign="left" spacing={2}>
      <ListItem><Link>Gifts For The Techie</Link> </ListItem>
       <ListItem><Link>Gifts For The Organiser</Link></ListItem>
       <ListItem><Link>Gifts For The Traveller</Link></ListItem>
       <ListItem><Link>Gifts For The Workaholic</Link></ListItem>
       
       
     </List>
    </VStack>
    
    </HStack>
    {/*  */}
    <HStack h="100%" justifyContent="space-evenly" w="30%">
    
      
      <Box w="100%" h="95%">
        <Image w="100%" h="100%" src="https://images.dailyobjects.com/marche/assets/images/other/gifting-page-drop-down-banner-1-update-up.png?tr=cm-pad_resize,v-2,w-1000,w-228,h-380,dpr-1"></Image>
      </Box>
    </HStack>
  </HStack>
  </>
  )
}

export default Gifting