import React from 'react'
import { Display } from './Navbar'
import {Box,HStack,Image,Link,VStack,Text,List,ListItem} from "@chakra-ui/react"
interface Props{
    style:Display,
    over:()=>void,
    leave:()=>void
}
const Office = ({style,over,leave}:Props) => {
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
      <Text fontSize="17px" textAlign="left" fontWeight="bold">STANDS</Text>
      <List fontSize="17px" textAlign="left" spacing={2}>
       <ListItem><Link>Watch</Link> </ListItem>
       <ListItem><Link>Laptop</Link></ListItem>
       <ListItem><Link>Mobile</Link></ListItem>
       <ListItem><Link>MagSafe</Link></ListItem>
       <ListItem><Link>iPad</Link></ListItem>
       <ListItem><Link>Monitor</Link></ListItem>
       
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
      <Text fontSize="17px" textAlign="left" fontWeight="bold">DESKS</Text>
      <List fontSize="17px" textAlign="left" spacing={2}>
      <ListItem><Link>Platform Collection</Link> </ListItem>
       <ListItem><Link>Desk Mat</Link></ListItem>
       <ListItem><Link>Mouse Pad</Link></ListItem>
       <ListItem><Link>Trays & Coasters</Link></ListItem>
       
       
     </List>
    </VStack>
    
    
    </HStack>
    {/*  */}
    <HStack h="100%" justifyContent="space-evenly" w="45%">
    <VStack w="30%" h="90%">
       <List fontSize="18px" fontWeight="bold" textAlign="left" spacing={4}>
       <ListItem>STATIONERY</ListItem>
       <ListItem>DRINKWARENew</ListItem>
       <ListItem>CHARGING SOLUTIONS</ListItem>
      
       
     </List>
    </VStack>
      
      <Box w="70%" h="95%">
        <Image w="100%" h="100%" src="https://images.dailyobjects.com/marche/assets/images/other/home-office-update-stationary-dropdown-up.png?tr=cm-pad_resize,v-2,w-1000,w-117,h-380,dpr-1"></Image>
      </Box>
    </HStack>
  </HStack>
  </>
  )
}

export default Office