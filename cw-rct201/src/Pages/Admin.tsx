import { AddIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Box,
  DrawerBody,
  useDisclosure,
  Button,
  Heading,
  Text,
  Flex,
  SimpleGrid,
  Avatar,
  background,
} from "@chakra-ui/react";
import React from "react";
import { BsFileBarGraphFill, BsPeopleFill } from "react-icons/bs";
import { MdOpenInNew, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { productsApi } from "../api/ProductsApi";
import AddProduct from "../Components/Admin/AddProduct";
import AdminProducts from "../Components/Admin/AdminProducts";
import AdminProductsTable from "../Components/Admin/AdminProducts";
import PieChart from "../Components/Admin/PieChart";
import Users from "../Components/Admin/Users";
import { getUsersData } from "../Redux/auth/authAction";

import { store } from "../Redux/store";
import { Data } from "./MobileProducts";
import { userobj } from "./Signup";

const Admin = () => {
  const [totalAdminArr, setTotalAdminarr] = React.useState<userobj[]>([]);
  const dispatch:any=useDispatch()
  const activeStyle = {
    color: "blue.200",
  };
  const n = {
    color: "white",
  };
  const [productsData, setPrdocutsData] = React.useState<Data[]>([]);
  const getProductsData = async () => {
    let response = await productsApi();
    setPrdocutsData(response);
  };
  React.useEffect(() => {
    dispatch(getUsersData())
    getProductsData();
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentUser, loginUsersData } = useSelector(
    (store: any) => store.authManager
  );
  let adminarr: userobj[] = [];
  for (let i = 0; i <= loginUsersData.length - 1; i++) {
    if (loginUsersData[i].role === "admin") {
      adminarr.push(loginUsersData[i]);
    }
  }
  React.useEffect(() => {
    setTotalAdminarr(adminarr);
  }, [loginUsersData]);
  const [currentPortion, setCurrentPortion] = React.useState("dashboard");
  return (
    <div>
      <Box width={"40%"} textAlign="center" margin={"auto"}>
        {" "}
        <Button p={7} mb={10} mt={10} colorScheme={"teal"} onClick={onOpen}>
          {" "}
          Admin Panel <MdOpenInNew />{" "}
        </Button>
      </Box>
      {/* Drawer Part For The Admin */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size={"sm"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Flex
              borderRadius={"5rem"}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              justifyContent={"space-around"}
            >
              <Box mt={10}>
                <Avatar
                  size={"lg"}
                  src={"https://avatars.githubusercontent.com/u/112655049?v=4"}
                  mb={4}
                  pos={"relative"}
                  _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: "green.300",
                    border: "2px solid white",
                    rounded: "full",
                    pos: "absolute",
                    bottom: 0,
                    right: 3,
                  }}
                />
              </Box>
              <Box mt={10} bgColor={"grey.600"} borderRadius={"0.4rem"}>
                <Heading fontWeight={"bold"} fontSize={"32px"}>
                  {currentUser.name}
                  {"  "}

                  {currentUser.lastname}
                </Heading>
                <Text
                  fontWeight={600}
                  color={"gray.300"}
                  mt={2}
                  fontSize={"16px"}
                >
                  {currentUser.email}
                </Text>
              </Box>
            </Flex>

            <Flex
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
              borderRadius={"1rem"}
              // This is The Dashboard Icon Div
              onClick={() => setCurrentPortion("dashboard")}
              mt={5}
              textAlign={"center"}
              alignItems="center"
              p={5}
            >
              <Box>
                <BsFileBarGraphFill fontSize={"2rem"} />
              </Box>
              <Box ml={30}>
                <Text fontWeight={600} fontSize={"19px"}>
                  Dashboard
                </Text>
              </Box>
            </Flex>
            <Flex
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
              borderRadius={"1rem"}
              // This is The Products Icon Div
              onClick={() => setCurrentPortion("products")}
              mt={5}
              textAlign={"center"}
              alignItems="center"
              p={5}
            >
              <Box>
                <MdOutlineProductionQuantityLimits fontSize={"2rem"} />
              </Box>
              <Box ml={30}>
                <Text fontWeight={600} fontSize={"19px"}>
                  Products
                </Text>
              </Box>
            </Flex>
            <Flex
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
              borderRadius={"1rem"}
              // This is The Dashboard Icon Div
              onClick={() => setCurrentPortion("addproduct")}
              mt={5}
              textAlign={"center"}
              alignItems="center"
              p={5}
            >
              <Box>
                <AddIcon fontSize={"2rem"} />
              </Box>
              <Box ml={30}>
                <Text fontWeight={600} fontSize={"19px"}>
                  Add Product
                </Text>
              </Box>
            </Flex>
            <Flex
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
              borderRadius={"1rem"}
              // This is The Dashboard Icon Div
              onClick={() => setCurrentPortion("manageusers")}
              mt={5}
              textAlign={"center"}
              alignItems="center"
              p={5}
            >
              <Box>
                <BsPeopleFill fontSize={"2rem"} />
              </Box>
              <Box ml={30}>
                <Text fontWeight={600} fontSize={"19px"}>
                  Manage Users
                </Text>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* Drawer End This Side */}

      {currentPortion === "dashboard" ? (
        <Box style={{ color: "white" }}>
          {/* Here First Dashbaord Started */}
          <SimpleGrid gap={10} columns={[2, 3, 3, 4]}>
            <Box m={2} bgColor={"red.600"} p={7} borderRadius={"1rem"}>
              <Heading fontSize={"30px"}>Total Products</Heading>
              <Text fontWeight={"bold"} fontSize={"30px"}>
                {productsData.length}
              </Text>
            </Box>
            <Box m={2} p={7} bgColor={"yellow.600"} borderRadius={"1rem"}>
              <Heading fontSize={"30px"}>Total Users</Heading>
              <Text fontWeight={"bold"} fontSize={"30px"}>
                {loginUsersData.length}
              </Text>
            </Box>
            <Box m={2} p={7} bgColor={"green.800"} borderRadius={"1rem"}>
              <Heading fontSize={"30px"}>Total Sales </Heading>
              <Text fontWeight={"bold"} fontSize={"30px"}>
                ₹ 4000
              </Text>
            </Box>
            <Box m={2} p={7} bgColor={"blue.600"} borderRadius={"1rem"}>
              <Heading fontSize={"30px"}>Total Orders</Heading>
              <Text fontWeight={"bold"} fontSize={"30px"}>
                10
              </Text>
            </Box>
          </SimpleGrid>
          <SimpleGrid
            gap={10}
            columns={[1, 2, 2, 2]}
            margin={"auto"}
            width={"90%"}
            mt={10}
            borderRadius={"1rem"}
          >
            <PieChart />

            <Box>
              <Box p={7} bgColor={"blue.600"} borderRadius={"1rem"}>
                <Heading fontSize={"30px"}>
                  Total Admins : {totalAdminArr.length}
                </Heading>
                {totalAdminArr.map((el) => {
                  return (
                    <>
                      <Text mt={5} fontWeight={"bold"} fontSize={"28x"}>
                        Name : {el.name} {el.lastname}
                      </Text>
                    </>
                  );
                })}
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      ) : null}
      {currentPortion === "products" ? <AdminProducts /> : null}
      {currentPortion === "addproduct" ? <AddProduct /> : null}
      {currentPortion === "manageusers" ? <Users /> : null}
    </div>
  );
};

export default Admin;
