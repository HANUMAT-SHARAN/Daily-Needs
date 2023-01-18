import axios from "axios";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export type userobj = {
  name: string;
  lastname: string;
  email: string;
  password: string;
  cart?:[]
};

let user = {
  name: "",
  lastname: "",
  email: "",
  password: "",

};
export default function Signup() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [data, setData] = useState<userobj>(user);

  const [buttonDisable,setButtonDisable]=useState<boolean>(true)


  const makeDisable=()=>{
      if(data.password.length>=7&&(data.password.includes("$")||data.password.includes("@"))){
          setButtonDisable(false)
      }else{
        setButtonDisable(true)
      }
  }
  console.log(data)

  const sendData = async () => {
   data.cart=[]
    await axios.post(`http://localhost:4040/users`, data);
    setData(user);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    name="name"
                    type="text"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    value={data.lastname}
                    onChange={(e) =>
                      setData({ ...data, lastname: e.target.value })
                    }
                    name="lastname"
                    type="text"
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                name="email"
                type="email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  value={data.password}
                  onChange={(e) => [  setData({ ...data, password: e.target.value }),makeDisable()] }
                  name="password"
                  type={showPassword ? "text" : "password"}
                />
               
                <InputRightElement h={"full"}>
               
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
               
              </InputGroup>
              {buttonDisable?<Text fontWeight={"bold"} mt={2} color={"red"}>Password must have 8 characters and @ or $</Text>:null}
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
              isDisabled={buttonDisable}
                onClick={sendData}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link to="/login" color={"blue.400"}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
