import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useSelector,useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { makeUserLogout } from '../Redux/auth/authAction';
  import {store} from "../Redux/store"


  export default function UserInfo() {
const nav=useNavigate()
    const dispatch:any=useDispatch()
    const {currentUser,isAuth}=useSelector((store:any)=>store.authManager)
    return (
      <Center py={6}>
        <Box
          maxW={'500px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
          size={'xl'}
          src={
            'https://avatars.githubusercontent.com/u/112655049?v=4'
          }
         
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
          <Heading fontSize={'2.2rem'} fontFamily={'body'}>
            {currentUser.name}{currentUser.lastname}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            {currentUser.email}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
           {currentUser.cart.length==0?"Your Cart is Empty":"Nothing is Here"}
          </Text>
  
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #Shop
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #Enjoy
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #fun
            </Badge>
          </Stack>
  
          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Shop More
            </Button>
            <Link to="/">
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              onClick={()=>[dispatch(makeUserLogout()),window.location.reload(),nav('/')]}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Logout
            </Button>
            </Link>
           
          </Stack>
        </Box>
      </Center>
    );
  }



//    {/* <Drawer
//             isOpen={myAccountOpen}
//             placement="right"
          
//             onClose={() => setMyAccountOpen(false)}
//           >
//             <DrawerOverlay />
//             <DrawerContent>
//               <DrawerCloseButton />
//               <DrawerHeader>Create your account</DrawerHeader>

//               <DrawerBody>
//                <UserInfo/>
//               </DrawerBody>

//               <DrawerFooter>
//                 <Button
//                   variant="outline"
//                   mr={3}
//                   onClick={() => setMyAccountOpen(false)}
//                 >
//                   Cancel
//                 </Button>
//                 <Button colorScheme="blue">Save</Button>
//               </DrawerFooter>
//             </DrawerContent>
//           </Drawer> */}