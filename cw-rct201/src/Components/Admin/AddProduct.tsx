import { AttachmentIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
type product = {
  name: string;
  category: string;
  cost: number | string;
  image1: string;
};
let iObj = {
  name: "",
  category: "",
  cost: "",
  image1: "",
};
export default function AddProduct(): JSX.Element {
  const success = () => {
    toast.success(" Product Added Successfully", { theme: "colored" });
  };

  const [data, setData] = React.useState<product>(iObj);

  const sendData = () => {
    data.cost = +data.cost;

    axios.post(
      `https://backendsirver-for-daily-needs.vercel.app/products`,
      data
    );
    setData(iObj);
    success();
  };
  return (
    <>
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
        >
          <Flex justifyContent={"space-around"}>
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
              Add New Product
            </Heading>
            <Heading>
              <AttachmentIcon />
            </Heading>
          </Flex>

          <Text
            fontSize={{ base: "sm", sm: "md" }}
            color={useColorModeValue("gray.800", "gray.400")}
          ></Text>
          <FormControl id="name">
            <Input
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Name"
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>
          <FormControl id="category">
            <Select
              onChange={(e) => setData({ ...data, category: e.target.value })}
              name="category"
              placeholder="Select option"
            >
              <option value="Apple">Apple</option>
              <option value="Asus">Asus</option>
              <option value="lenovo">Lenovo</option>
              <option value="hp">Hp</option>
              <option value="Dell">Dell</option>
            </Select>
          </FormControl>
          <FormControl id="price">
            <Input
              value={data.cost}
              onChange={(e) => setData({ ...data, cost: e.target.value })}
              placeholder="0"
              _placeholder={{ color: "gray.500" }}
              type="number"
            />
          </FormControl>
          <FormControl id="imgurl">
            <Input
              value={data.image1}
              onChange={(e) => setData({ ...data, image1: e.target.value })}
              placeholder="Image Url"
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              onClick={() => sendData()}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Add Now!
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}
