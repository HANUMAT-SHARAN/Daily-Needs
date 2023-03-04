import React, { useState } from "react";
import {Link} from "react-router-dom"
import {
  Box,
  HStack,
  Image,
  
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Show,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  DrawerCloseButton,
  Input,
  DrawerFooter,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  Heading,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { BsBagCheckFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Newarrivals from "./Newarrivals";
import Cases from "./Cases";
import ACCESSORIES from "./ACCESSORIES";
import Bags from "./Bags";
import Office from "./Office";
import Collection from "./Collection";
import Gifting from "./Gifting";
import { Modal } from "flowbite";
import UserInfo from "../UserInfo";

import { STORE, store } from "../../Redux/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../Redux/auth/authAction";
export interface Display {
  display: string;
}
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const nav = useNavigate();
  const { isAuth,currentUser } = useSelector((store: STORE) => store.authManager);

  const navigate=useNavigate()
  const {name}=currentUser
  
  const [myAccountOpen, setMyAccountOpen] = React.useState<boolean>(false);
  const cancelRef = React.useRef<any>();

  const [style, setstyle] = useState({ display: "none" });
  const [style1, setstyle1] = useState({ display: "none" });
  const [style2, setstyle2] = useState({ display: "none" });
  const [style3, setstyle3] = useState({ display: "none" });
  const [style4, setstyle4] = useState({ display: "none" });
  const [style5, setstyle5] = useState({ display: "none" });
  const [style6, setstyle6] = useState({ display: "none" });
  

  return (
    <>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        h="90px"
        p="0px 10px"
        border="1px solid #20a87e"
      >
        <Show below="900px">
          <Box
            onClick={onOpen}
            h={"40%"}
            w={{ base: "15%", sm: "20%", lg: "15%" }}
          >
            <GiHamburgerMenu style={{ width: "100%", height: "100%" }} />
          </Box>
        </Show>
        <Box h="100%" w={{ base: "30%", sm: "10%", lg: "10%" }}>
          
          <Image onClick={()=>navigate("/")}
            w="100%"
            h="100%"
            src="https://i.ibb.co/GvD6M4H/Daily-Needs-modified.png"
          />
        </Box>
        <Show above="901px">
          <HStack
            fontSize="14px"
            justifyContent="space-between"
            fontWeight="bold"
            h="auto"
            w="70%"
          >
            <Box
              h="90px"
              pt="32px"
              color="#eb8f7f"
              onMouseOver={() => setstyle({ display: "flex" })}
              onMouseLeave={() => setstyle({ display: "none" })}
              _hover={{ color: "#20a87e" }}
            >
              <Link to={"/laptopproductpage"}  >LAPTOPS</Link>
            </Box>

            <Box
              h="90px"
              pt="32px"
              onMouseOver={() => setstyle1({ display: "flex" })}
              onMouseLeave={() => setstyle1({ display: "none" })}
              _hover={{ color: "#20a87e" }}
            >
              <Link to={""}  >CASES & SLEEVES </Link>
            </Box>
            <Box
              h="90px"
              pt="32px"
              color="#eb8f7f"
              onMouseOver={() => setstyle2({ display: "flex" })}
              onMouseLeave={() => setstyle2({ display: "none" })}
              _hover={{ color: "#20a87e" }}
            >
              <Link to={"/mobileproducts"} >MOBILES</Link>
            </Box>
            <Box h="90px" pt="32px" cursor="pointer" >
              SALE
            </Box>
            <Box
              h="90px"
              pt="32px"
              onMouseOver={() => setstyle3({ display: "flex" })}
              onMouseLeave={() => setstyle3({ display: "none" })}
              _hover={{ color: "#20a87e" }}
            >
              <Link to={""} >BAGS & WALLETS</Link>
            </Box>
            <Box
              h="90px"
              pt="32px"
              onMouseOver={() => setstyle4({ display: "flex" })}
              onMouseLeave={() => setstyle4({ display: "none" })}
              _hover={{ color: "#20a87e" }}
            >
              <Link to={""} > HOME OFFICE</Link>
            </Box>
            <Box
              h="90px"
              pt="32px"
              onMouseOver={() => setstyle5({ display: "flex" })}
              onMouseLeave={() => setstyle5({ display: "none" })}
              _hover={{ color: "#20a87e" }}
            >
              <Link to={"/mobileproducts"}  >COLLECTIONS</Link>
            </Box>
            <Box
              h="90px"
              pt="32px"
              onMouseOver={() => setstyle6({ display: "flex" })}
              onMouseLeave={() => setstyle6({ display: "none" })}
              _hover={{ color: "#20a87e" }}
            >
              <Link to={""}  > GIFTING</Link>
            </Box>
          </HStack>
        </Show>
        <HStack
          justifyContent="space-evenly"
          h="auto"
          w={{ sm: "20%", lg: "15%" }}
        >
         <Link to="/cart"><BsBagCheckFill size="25px" /> </Link> 
          <Menu>
            <MenuButton>
             {isAuth? <Heading color="white" borderRadius={"1rem"} p={3} bg={"red"} fontSize={"20px"}>{name[0]}</Heading>: <BsFillPersonFill size="30px" />}
            </MenuButton>
            <MenuList>
              {isAuth && (
                <>
                  <Button onClick={() => setMyAccountOpen(true)}>
                    My Account
                  </Button>
                  <MenuItem>Orders</MenuItem>
                  <MenuItem>Address</MenuItem>
                  <Button onClick={()=>nav('/admin')}>Admin</Button>
                </>
              )}
              {!isAuth ? (
                <>
                  {" "}
                 <MenuList>
                    <Button onClick={() => nav("/signup")}>Signup</Button>
                  {" "}
               
                   
                      {" "}
                      <Button onClick={() => nav("/login")}>Login</Button>
                      <Button onClick={()=>nav('/admin')}>Admin</Button>
                    
                      </MenuList>
                </>
              ) : null}
            </MenuList>
          </Menu>
          {/* My Account modal here */}

          <AlertDialog
            motionPreset="slideInBottom"
            leastDestructiveRef={cancelRef}
            onClose={() => setMyAccountOpen(false)}
            isOpen={myAccountOpen}
            isCentered
          >
            <AlertDialogOverlay />

            <AlertDialogContent>
              <AlertDialogCloseButton />
              <AlertDialogBody>
                {/* Here is the single person detals coming form the redux */}
                <UserInfo />
              </AlertDialogBody>
              <AlertDialogFooter></AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          {/* My Address Drawer Here */}
          <Box onClick={() => nav("/search")}>
            {" "}
            <BiSearch size={"30px"} />
          </Box>
        </HStack>
      </HStack>

      <Newarrivals
        style={style}
        over={() => setstyle({ display: "flex" })}
        leave={() => setstyle({ display: "none" })}
      />
      <Cases
        style={style1}
        over={() => setstyle1({ display: "flex" })}
        leave={() => setstyle1({ display: "none" })}
      />
      <ACCESSORIES
        style={style2}
        over={() => setstyle2({ display: "flex" })}
        leave={() => setstyle2({ display: "none" })}
      />
      <Bags
        style={style3}
        over={() => setstyle3({ display: "flex" })}
        leave={() => setstyle3({ display: "none" })}
      />
      <Office
        style={style4}
        over={() => setstyle4({ display: "flex" })}
        leave={() => setstyle4({ display: "none" })}
      />
      <Collection
        style={style5}
        over={() => setstyle5({ display: "flex" })}
        leave={() => setstyle5({ display: "none" })}
      />
      <Gifting
        style={style6}
        over={() => setstyle6({ display: "flex" })}
        leave={() => setstyle6({ display: "none" })}
      />

      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent h="500px" mt="90px">
          <DrawerHeader borderBottomWidth="1px">Categories</DrawerHeader>
          <DrawerBody>
            <Box p="10px" borderBottom="1px solid teal">
            <Link to={"/mobileproducts"} >MOBILES</Link>
            </Box>
            <Box p="10px" borderBottom="1px solid teal">
            <Link to={"/laptopproductpage"}  >LAPTOPS</Link>
            </Box>
            <Box p="10px" borderBottom="1px solid teal">
              <Link to={""} > ACCESSORIES</Link>
            </Box>
            <Box p="10px" borderBottom="1px solid teal">
              <Link to={""}> SALE</Link>
            </Box>
            <Box p="10px" borderBottom="1px solid teal">
              <Link to={""}>BAGS & WALLETS</Link>{" "}
            </Box>
            <Box p="10px" borderBottom="1px solid teal">
              <Link to={""}>HOME OFFICE</Link>{" "}
            </Box>
            <Box p="10px" borderBottom="1px solid teal">
              <Link to={""}>COLLECTIONS</Link>{" "}
            </Box>
            <Box p="10px" borderBottom="1px solid teal">
              <Link to={""}>GIFTING</Link>{" "}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
