import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  Button,
  SimpleGrid,
  CardFooter,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { userobj } from "../../Pages/Signup";
import { getUsersData } from "../../Redux/auth/authAction";
import { store } from "../../Redux/store";

type loginUser = {
  id: number;
  role: string;
  name: string;
  email: string;
  cart: any;
};

const Users = () => {
  const dispatch: any = useDispatch();
  const { loginUsersData } = useSelector((store: any) => store.authManager);

  const [users, setUsers] = React.useState(loginUsersData);

  const deleteSuccess = () => {
    toast.error("User Deleted Successfully", { theme: "colored" });
  };
  const updateSuccess = () => {
    toast.success("User Updated Successfully", { theme: "colored" });
  };

  const deleteUser = async (id: number) => {
    try {
      let res = await fetch(
        `https://backendsirver-for-daily-needs.vercel.app/users/${id}`,
        {
          method: "DELETE",
        }
      );

      setTimeout(() => {
        dispatch(getUsersData());
      }, 1500);
      deleteSuccess();
    } catch (error) {}
  };

  const updateUser = (id: number, role: string) => {
    let obj = {
      role: role === "user" ? "admin" : "user",
    };
    try {
      axios.patch(
        `https://backendsirver-for-daily-needs.vercel.app/users/${id}`,
        obj
      );
      setTimeout(() => {
        dispatch(getUsersData());
      }, 1500);
      updateSuccess();
    } catch (error) {}
  };
  React.useEffect(() => {
    setUsers(loginUsersData);
  }, [loginUsersData]);
  return (
    <SimpleGrid width={"80%"} gap={10} margin="auto" columns={[1, 2, 2, 3]}>
      {users.map((el: any) => {
        return (
          <>
            <Box
              width={"100%"}
              boxShadow={
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
              }
              borderRadius={"5px"}
              p={10}
              alignItems={"center"}
              textAlign={"center"}
              mt={20}
              margin={"auto"}
              justifyContent={"space-between"}
            >
              <Text mt={3} fontWeight={"bold"} fontSize={"16px"}>
                Name : {el.name}
              </Text>
              <Text mt={3} fontWeight={"bold"} fontSize={"16px"}>
                Email: {el.email}
              </Text>
              <Text mt={3} fontWeight={"bold"} fontSize={"16px"}>
                Cart has {el.cart.length} products
              </Text>
              <Text
                mb={5}
                margin={"auto"}
                width={"70%"}
                borderRadius={"3px"}
                style={
                  el.role == "admin"
                    ? { backgroundColor: "green" }
                    : { backgroundColor: "" }
                }
                mt={3}
                fontWeight={"bold"}
                fontSize={"16px"}
              >
                Role : {el.role == "admin" ? "Admin" : "User"}
              </Text>
              <Flex mt={7} justifyContent={"space-evenly"} margin={"auto"}>
                <Button
                  onClick={() => updateUser(el.id, el.role)}
                  colorScheme={"teal"}
                >
                  <EditIcon />
                </Button>
                <Button onClick={() => deleteUser(el.id)} colorScheme="red">
                  <DeleteIcon />
                </Button>
              </Flex>
            </Box>
          </>
        );
      })}
    </SimpleGrid>
  );
};

export default Users;
