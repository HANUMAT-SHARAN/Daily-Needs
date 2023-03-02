import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Grid,
  HStack,
  Button,
  Text,
  VStack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import CartItems from "./CartItems";
import { BsBagCheckFill } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { getUsersData } from "../../Redux/auth/authAction";
interface cartItems {
  image1: string;
  name: string;
  cost: number;
  quantity: number;
  orderId: any;
}

const Cart = () => {
  // const { totalprice } = useSelector((store: any) => store.authManager)
  const [total, settotal] = useState<number>(0);
  const [cartdata, setcartdata] = useState<cartItems[]>([]);
  const { currentUser, isAuth } = useSelector(
    (store: any) => store.authManager
  );
  const erroralert = () => {
    toast.error("Please Login To See the Cart", { theme: "colored" });
  };
  const quantityUpdateSucess = () => {
    toast.success("Quantity Updated Success", { theme: "colored" });
  };
  const deleteAlert = () => {
    toast.error("Product Deleted Sucessfully", { theme: "colored" });
  };

  const handletotal = () => {
    var temp = cartdata;
    let sum: number = 0;

    for (let i = 0; i < temp.length; i++) {
      sum += temp[i].cost * temp[i].quantity;
    }
   
    settotal(sum);
  };
  const getUserData = async () => {
    try {
      let r = await axios.get(
        `https://backendsirver-for-daily-needs.vercel.app/users/${currentUser.id}`
      );
      let d = r.data;
      setcartdata(d.cart);
      
      handletotal();
    } catch (error) {
      
    }
  };

  const handledelete = async (orderId: string) => {
    try {
      let r = await axios.patch(
        `https://backendsirver-for-daily-needs.vercel.app/users/${currentUser.id}`,
        { cart: cartdata.filter((item: cartItems) => item.orderId !== orderId) }
      );

      setcartdata(r.data);
      getUserData();
    } catch (error) {
      
    }
    handletotal();
    getUserData();
    deleteAlert();
  };
  const handlequant = async (orderId: string, num: number) => {
    let temp = cartdata;

    for (let i = 0; i < cartdata.length; i++) {
      if (temp[i].orderId == orderId) {
        temp[i].quantity += num;
      }
    }

    try {
      let r = await axios.patch(
        `https://backendsirver-for-daily-needs.vercel.app/users/${currentUser.id}`,
        { cart: temp }
      );

      setcartdata(r.data);
      getUserData();
    } catch (error) {
     
    }
    handletotal();
    getUsersData();
    quantityUpdateSucess();
  };
  setTimeout(() => {
    handletotal();
  }, 100);

  useEffect(() => {
    getUserData();
  }, []);

  if (!isAuth) {
    erroralert();
    return <Heading textAlign={"center"} margin="100px">Please Login Now To Buy Products </Heading>;
  } else {
  }

  return (
    <>
      <HStack
        h="60px"
        w="100%"
        p="10px 30px"
        justify="center"
        borderBottom={"2px solid #999"}
        alignItems="center"
      >
        <Box>
          <BsBagCheckFill style={{ color: "#161636" }} size="35px" />
        </Box>
        <Text color="#161636" fontWeight={"bold"} fontSize="20px">
          SHOPING BAG
        </Text>
      </HStack>

      <SimpleGrid
        columns={[1, 1, 1, 1, 1]}
        justifyContent={"space-between"}
        p="10px 30px"
        mt="20px"
        w="100%"
        h="auto"
        gap={10}
        // border="1px solid red"
      >
        <SimpleGrid
          alignItems={"center"}
          columns={[1, 1, 2, 2, 3]}
          h="auto"
          gap="40px"
          textAlign={"center"}
          border="1px solid #999"
        >
          {cartdata &&
            cartdata.length > 0 &&
            cartdata.map((e: any) => (
              <CartItems
                objProp={e}
                funcProp={handledelete}
                funcquant={handlequant}
              />
            ))}
        </SimpleGrid>
        {cartdata.length === 0 ? (
          <Heading margin="20px" textAlign="center">
            Your Cart Is Empty Please Shop Now! 🥺
          </Heading>
        ) : null}
        {cartdata.length > 0 ? (
          <Box
            borderRadius={"5px"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            border="1px solid #161636"
            textAlign={"center"}
          >
            <Text
              margin="20px"
              color="#161636"
              fontWeight={"bold"}
              fontSize="20px"
            >
              Total price :- {"    "}₹ {total}{" "}
            </Text>
            <Link to="/checkout">
              {" "}
              <Button margin="10px" bgColor="#161636" w="70%" color="white">
                <BiLockAlt size="20px" />
                CHECKOUT
              </Button>
            </Link>
          </Box>
        ) : null}
      </SimpleGrid>
    </>
  );
};

export default Cart;
