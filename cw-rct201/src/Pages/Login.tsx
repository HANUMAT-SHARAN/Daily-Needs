import { useAuth0 } from "@auth0/auth0-react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";


import { userobj } from "./Signup";


type loginuser = {
  password: string;
  email: string;
};

const initlogindata = { 
  email: "",
  password: "",
};
export default function Login(): JSX.Element {


    const {loginWithRedirect} = useAuth0()
    
  const [userLoginData, setUserLoginData] =
    React.useState<loginuser>(initlogindata);

  const checkUser = () => {
    console.log(userLoginData);
    setUserLoginData(initlogindata);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Login Now!
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
          value={userLoginData.email}
            onChange={(e) =>
              setUserLoginData({ ...userLoginData, email: e.target.value })
            }
            name="email"
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            value={userLoginData.password}
            onChange={(e) =>
              setUserLoginData({ ...userLoginData, password: e.target.value })
            }
            name="password"
            type="password"
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            onClick={checkUser}
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Submit
          </Button>
          <Button onClick={()=>loginWithRedirect()}>Login with google</Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
