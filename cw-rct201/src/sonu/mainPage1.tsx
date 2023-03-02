import {
  Box,
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";
import axios from "axios";
// import "../Components/MobileProducts/Card.css";
// import "../Components/MobileProducts/Card.css"
import { Link } from "react-router-dom";
export interface Data {
  image1: string;
  image2: string;
  image3?: string;
  image4?: string;
  cost: number;
  description: string;
  id: number;
  Rating: number;

  category: string;
  name: string;

  cat: string;
}
const MainPage1 = () => {
  // const getData = async (category, rating) => {
  //   return await axios
  //     .get(
  //       `https://koti-api.onrender.com/iphone`
  //     )
  //     .then((res) => setProducts(res.data));
  // };
  // console.log(products)

  const [Iphone, setIphone] = useState<Data[]>([]);
  const [category, setcategory] = useState<string>("Apple");
  const [rating, setrating] = useState<string>("asc");
  const getData = async (category: string, rating: string) => {
    return await axios
      .get(
        `https://koti-api.onrender.com/iphone?cat=${category}&_sort=cost&_order=${rating}`
      )
      .then((res) => setIphone(res.data));
  };
  useEffect(() => {
    getData(category, rating);
  }, [category, rating]);

  return (
    <div>
      <Flex>
        <Box
          width={"20%"}
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          paddingLeft={"3%"}
          paddingTop={"3%"}
          bg={"#ECF2FF"}
          h={"85vh"}
          zIndex="2"
          position="relative"
        >
          {/* <button onClick={()=>setcategory("Apple")}>Apple</button>
          <button onClick={()=>setcategory("samsung")}>Samsung</button>
          <button onClick={()=>setcategory("OnePlus")}>Oneplus</button>
          <button onClick={()=>setcategory("Oppo")}>Oppo</button>
          <button onClick={()=>setcategory("Motorola")}>Motorola</button>
          <button onClick={()=>setcategory("Google")}>Google</button>
          <button onClick={()=>setrating("desc")} >Asc</button> */}
          
          <CheckboxGroup colorScheme="green">
            <Stack spacing={"20px"}>

            <Heading size={"md"} color={"green"}>Category</Heading>
            <Stack direction={"column"}>
              <Checkbox  onChange={()=>setcategory("Apple")} >Apple</Checkbox>
              <Checkbox onChange={()=>setcategory("samsung")}>Samsung</Checkbox>
              <Checkbox onChange={()=>setcategory("OnePlus")} >Oneplus</Checkbox>
              <Checkbox onChange={()=>setcategory("Oppo")} >Oppo</Checkbox>
              <Checkbox onChange={()=>setcategory("Motorola")} >Motorola</Checkbox>
              <Checkbox onChange={()=>setcategory("Google")} >Google</Checkbox>
            </Stack>
            </Stack>
          </CheckboxGroup>
          <Divider border={"2px solid "} width={"100px"} orientation='horizontal' />
          <CheckboxGroup colorScheme="green">
            <Stack spacing={"20px"}>
            <Heading size={"md"} color={"green"}>Fiter By Price</Heading>
            <Stack direction={"column"}>
              <Checkbox  onChange={()=>setrating("desc")} >High-Low</Checkbox>
              <Checkbox onChange={()=>setrating("asc")}>Low-High</Checkbox>
            </Stack>
            </Stack>
          </CheckboxGroup>
          </Box>
        <Spacer />
        <Box
          w="78%"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          maxW="7xl"
          mx="auto"
          px={{
            base: "4",
            md: "8",
            lg: "12",
          }}
          py={{
            base: "6",
            md: "8",
            lg: "12",
          }}
        >
          <ProductGrid>
            {Iphone.map((product) => (
              <Link to={`/product/${product.id}`}>
                <ProductCard key={product.id} product={product} />
              </Link>
            ))}
          </ProductGrid>
        </Box>
      </Flex>
    </div>
  );
};

export default MainPage1;
