import { useAuth0 } from "@auth0/auth0-react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// import {  store } from "../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";

// import { userobj } from "./Signup";
// import { loginApi } from "../Redux/auth/authApi";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { getUsersData, setCurrentUser } from "../Redux/auth/authAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { sendDataToRedux } from "../Redux/admin/adminAction";

export type userobj = {
  name: string;
  lastname: string;
  email: string;
  password: string;
  cart?: [];
  role?: string;
};
type loginuser = {
  password: string;
  email: string;
};

const initlogindata = {
  email: "",
  password: "",
};
export default function Login(): JSX.Element {
  const { loginUsersData } = useSelector((store: any) => store.authManager);
  const [forgotpass,setforgotemail]=useState("")
  const loginSucess = () => {
    toast.success("Logged In Successfully", { theme: "colored" });
  };
  const error = () => {
    toast.error("Please Check Your  Password Or Email", { theme: "colored" });
  };

  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [userLoginData, setUserLoginData] =
    React.useState<loginuser>(initlogindata);

  const dispatch: any = useDispatch();

  const { loginWithRedirect } = useAuth0();

  const nav = useNavigate();

  React.useEffect(() => {
    dispatch(getUsersData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const forgot=async()=>{
    if(forgotpass===""){
      alert("please fill the email field")
    }
    try {
      let r=await fetch("https://backendsirver-for-daily-needs.vercel.app/users")
      let d=await r.json()
      // console.log(d)
      let res = d.filter((el:any)=>el.email===forgotpass)
      if(res.length>0){
        toast.success(`Your password is ${res[0].password}`, { theme: "colored" });
      }else{
        toast.error(`Please enter correct email`, { theme: "colored" });
      }
      } catch (error) {
        console.log(error)
      }
    }



  const checkUser = () => {
    for (let i = 0; i <= loginUsersData.length - 1; i++) {
      if (
        userLoginData.email === loginUsersData[i].email &&
        userLoginData.password === loginUsersData[i].password
      ) {
        loginSucess();
        nav("/");
        dispatch(setCurrentUser(loginUsersData[i]));
        setUserLoginData(initlogindata);
        return;
      }
    }
    error();
    setUserLoginData(initlogindata);
    return;
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
              {setforgotemail(e.target.value)
              setUserLoginData({ ...userLoginData, email: e.target.value })}
            }
            name="email"
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              value={userLoginData.password}
              onChange={(e) =>
                setUserLoginData({ ...userLoginData, password: e.target.value })
              }
              name="password"
              type={showPassword ? "text" : "password"}
            />

            <InputRightElement h={"full"}>
              <Button
                variant={"ghost"}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Stack spacing={6}>
          <Button
            onClick={checkUser}
            bg={"green.400"}
            color={"white"}
            _hover={{
              bg: "green.500",
            }}
          >
            Submit
          </Button>
          <Button
            onClick={forgot}
            bg={"green.400"}
            color={"white"}
            _hover={{
              bg: "green.500",
            }}
          >
            forgot password
          </Button>
          <Text
            onClick={() => nav("/signup")}
            fontSize={"13px"}
            p={2}
            fontWeight="bold"
            textAlign="center"
            borderRadius="0.4rem"
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Dont Have Account Signup Now?
          </Text>
          <Button onClick={() => loginWithRedirect()}>Login with google</Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
