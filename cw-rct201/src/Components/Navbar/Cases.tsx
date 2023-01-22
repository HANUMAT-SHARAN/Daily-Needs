import React from 'react'
import { Display } from './Navbar'
import {Box,HStack,Image,Link,VStack,Text,List,ListItem} from "@chakra-ui/react"

interface Props{
    style:Display,
    over:()=>void,
    leave:()=>void
}
const Cases = ({style,over,leave}:Props) => {
  return (
    <>
    <HStack
    p='10px'
    zIndex={1}
    onMouseOver={over} onMouseLeave={leave}
   style={style}
    shadow="md"
    pos="absolute"
    bgColor="white"
    w="100%"
    h="400px"
    m="auto"
   
  >
   
    <HStack w="55%" h="90%" borderRight="1px solid #999">
        
    <VStack w="20%" h="90%">
      <Text fontSize="20px" textAlign="left" fontWeight="bold">APPLE</Text>
      <List fontSize="17px" textAlign="left" spacing={2}>
       <ListItem><Link>iphone13</Link> </ListItem>
       <ListItem><Link>iphone14</Link></ListItem>
       <ListItem><Link>iphone14 pro</Link></ListItem>
       <ListItem><Link>iphone14 pro max</Link></ListItem>
       <ListItem><Link>iphoneXR</Link></ListItem>
       <ListItem><Link>iphone12 mini</Link></ListItem>
       <ListItem><Link>iphoneX</Link></ListItem>
     </List>
    </VStack>
    <VStack w="20%" h="90%">
      <Text fontSize="14px" textAlign="left" fontWeight="bold">SAMSUNG</Text>
      <List fontSize="17px" textAlign="left" spacing={2}>
      <ListItem><Link>samsung31</Link> </ListItem>
       <ListItem><Link>samsung31 pro</Link></ListItem>
       <ListItem><Link>samsung S20</Link></ListItem>
       <ListItem><Link>samsung S20 pro</Link></ListItem>
       <ListItem><Link>samsung S21 Ultra</Link></ListItem>
       <ListItem><Link>samsung S21 pro</Link></ListItem>
       <ListItem><Link>samsung 5431</Link></ListItem>
     </List>
    </VStack>
    <VStack w="20%" h="90%">
      <Text fontSize="14px" textAlign="left" fontWeight="bold">ONEPLUS</Text>
      <List fontSize="17px" textAlign="left" spacing={2}>
      <ListItem><Link>OnePlus 10R</Link> </ListItem>
       <ListItem><Link>OnePlus 9R</Link></ListItem>
       <ListItem><Link>OnePlus Nord</Link></ListItem>
       <ListItem><Link>OnePlus 9</Link></ListItem>
       <ListItem><Link>OnePlus 9RT</Link></ListItem>
       <ListItem><Link>OnePlus 452</Link></ListItem>
       <ListItem><Link>OnePlus 10 pro</Link></ListItem>
     </List>
    </VStack>
    <VStack w="20%" h="90%">
      <Text fontSize="14px" textAlign="left" fontWeight="bold">OTHER BRANDS</Text>
      <List fontSize="17px" textAlign="left" spacing={2}>
      <ListItem><Link>Xiomi</Link> </ListItem>
       <ListItem><Link>Oppo</Link></ListItem>
       <ListItem><Link>Google</Link></ListItem>
       <ListItem><Link>Motorola</Link></ListItem>
       <ListItem><Link>Vivo</Link></ListItem>
       <ListItem><Link>Poco</Link></ListItem>
       <ListItem><Link>Infinix</Link></ListItem>
     </List>
    </VStack>
    <VStack w="20%" h="90%">
      <Text fontSize="14px" textAlign="left" fontWeight="bold">IPAD</Text>
      <List fontSize="17px" textAlign="left" spacing={2}>
      <ListItem><Link>ipad 5409</Link> </ListItem>
       <ListItem><Link>ipad 5220</Link></ListItem>
       <ListItem><Link>ipad pro</Link></ListItem>
       <ListItem><Link>ipad mini</Link></ListItem>
       <ListItem><Link>ipad 330</Link></ListItem>
       <ListItem><Link>ipad ER</Link></ListItem>
       <ListItem><Link>ipad X</Link></ListItem>
     </List>
    </VStack>
    </HStack>
    {/*  */}
    <HStack h="100%" justifyContent="space-evenly" w="45%">
    <VStack w="40%" h="90%">
      
      <List fontSize="14px" fontWeight="bold" textAlign="left" spacing={4}>
       <ListItem>LAPTOP/MACBOOK SLEEVES</ListItem>
       <ListItem>AIRPOD CASES</ListItem>
       <ListItem>MESSENGER BAGS</ListItem>
       <ListItem>iPAD COVERS & SLEEVES</ListItem>
       <ListItem>PASSPORT COVERS</ListItem>
       <ListItem>EYEWEAR CASES</ListItem>
       <ListItem>AIRTAG CASESN</ListItem>
       <ListItem>APPLE TV REMOTE CASES</ListItem>
     </List>
    </VStack>
      
      <Box w="60%" h="95%">
        <Image w="100%" h="100%" src="https://images.dailyobjects.com/marche/assets/images/other/airpods-cases-sleeves-page-dropdown-image.jpg?tr=cm-pad_crop,v-2,w-1000,w-145,h-653,dpr-1"></Image>
      </Box>
    </HStack>
  </HStack>
  </>
  )
}

export default Cases