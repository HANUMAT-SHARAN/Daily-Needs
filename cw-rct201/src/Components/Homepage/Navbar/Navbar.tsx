import React, { useState } from "react";
import {
  Box,
  HStack,
  Image,
  Link,
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
import { useSelector } from "react-redux";
export interface Display {
  display: string;
}
const Navbar = () => {
  const { isAuth, currentUser } = useSelector(
    (store: any) => store.authManager
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Box h="60%" w={{ base: "30%", sm: "10%", lg: "15%" }}>
          <Image
            w="90%"
            h="100%"
            src="https://images.dailyobjects.com/marche/icons/logo_named.png?tr=cm-pad_resize,v-2,w-135,h-27,dpr-1"
          />
        </Box>
        <Show above="901px">
          <HStack
            justifyContent="space-between"
            fontWeight="bold"
            h="auto"
            w="60%"
          >
            <Box
              h="90px"
              pt="32px"
              onMouseOver={() => setstyle({ display: "flex" })}
              onMouseLeave={() => setstyle({ display: "none" })}
              _hover={{ color: "#20a87e" }}
            >
              <Link style={{ textDecoration: "none" }}>NEW ARRIVALS</Link>
            </Box>

            <Box
              h="90px"
              pt="32px"
              onMouseOver={() => setstyle1({ display: "flex" })}
              onMouseLeave={() => setstyle1({ display: "none" })}
              _hover={{ color: "#20a87e" }}
            >
              <Link style={{ textDecoration: "none" }}>CASES & SLEEVES </Link>
            </Box>
            <Box
              h="90px"
              pt="32px"
              onMouseOver={() => setstyle2({ display: "flex" })}
              onMouseLeave={() => setstyle2({ display: "none" })}
              _hover={{ color: "#20a87e" }}
            >
              <Link style={{ textDecoration: "none" }}>ACCESSORIES</Link>
            </Box>
            <Box h="90px" pt="32px" cursor="pointer" color="#eb8f7f">
              SALE
            </Box>
            <Box
              h="90px"
              pt="32px"
              onMouseOver={() => setstyle3({ display: "flex" })}
              onMouseLeave={() => setstyle3({ display: "none" })}
              _hover={{ color: "#20a87e" }}
            >
              <Link style={{ textDecoration: "none" }}>BAGS & WALLETS</Link>
            </Box>
            <Box
              h="90px"
              pt="32px"
              onMouseOver={() => setstyle4({ display: "flex" })}
              onMouseLeave={() => setstyle4({ display: "none" })}
              _hover={{ color: "#20a87e" }}
            >
              <Link style={{ textDecoration: "none" }}> HOME OFFICE</Link>
            </Box>
            <Box
              h="90px"
              pt="32px"
              onMouseOver={() => setstyle5({ display: "flex" })}
              onMouseLeave={() => setstyle5({ display: "none" })}
              _hover={{ color: "#20a87e" }}
            >
              <Link style={{ textDecoration: "none" }}>COLLECTIONS</Link>
            </Box>
            <Box
              h="90px"
              pt="32px"
              onMouseOver={() => setstyle6({ display: "flex" })}
              onMouseLeave={() => setstyle6({ display: "none" })}
              _hover={{ color: "#20a87e" }}
            >
              <Link style={{ textDecoration: "none" }}> GIFTING</Link>
            </Box>
          </HStack>
        </Show>
        <HStack
          justifyContent="space-evenly"
          h="auto"
          w={{ sm: "20%", lg: "15%" }}
        >
          <BsBagCheckFill size="25px" />
          <Menu>
            <MenuButton>
              {/* {isAuth?currentUser.name: <BsFillPersonFill size="30px"/>} */}
            </MenuButton>
            <MenuList>
              <MenuItem>My Account</MenuItem>
              {/* <MenuItem>Orders</MenuItem>
    <MenuItem>Address</MenuItem> */}
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>

          <BiSearch size={"30px"} />
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
              <Link textDecoration={"none"}> NEW ARRIVALS</Link>
            </Box>
            <Box p="10px" borderBottom="1px solid teal">
              <Link textDecoration={"none"}>CASES & SLEEVES</Link>{" "}
            </Box>
            <Box p="10px" borderBottom="1px solid teal">
              <Link textDecoration={"none"}> ACCESSORIES</Link>
            </Box>
            <Box p="10px" borderBottom="1px solid teal">
              <Link textDecoration={"none"}> SALE</Link>
            </Box>
            <Box p="10px" borderBottom="1px solid teal">
              <Link textDecoration={"none"}>BAGS & WALLETS</Link>{" "}
            </Box>
            <Box p="10px" borderBottom="1px solid teal">
              <Link textDecoration={"none"}>HOME OFFICE</Link>{" "}
            </Box>
            <Box p="10px" borderBottom="1px solid teal">
              <Link textDecoration={"none"}>COLLECTIONS</Link>{" "}
            </Box>
            <Box p="10px" borderBottom="1px solid teal">
              <Link textDecoration={"none"}>GIFTING</Link>{" "}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
