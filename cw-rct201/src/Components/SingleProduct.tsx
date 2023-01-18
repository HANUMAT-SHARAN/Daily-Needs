import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
type prod = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
};

let obj = {
  id: 1,
  title: "mens",
  category: "men's clothing",
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  price: 746,
};
export default function SingleProduct() {
  const [data, setData] = useState<prod>(obj);
  const { title, category, description, image, price } = data;
  const getdata = async () => {
    try {
      let r = await fetch(`https://fakestoreapi.com/products/1`);
      let d = await r.json();
      console.log(d);
      setData(d);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
        
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={image}
            fit={"cover"}
            align={"center"}
            w={"70%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              ${price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {category}
              </Text>
              <Text fontSize={"lg"}>{description}</Text>
            </VStack>

            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List  spacing={2}>
                <ListItem >
                  <Text color={"blue"} as={"span"} fontWeight={"bold"}>
                    Product Name:
                  </Text>{" "}
                  {title}
                </ListItem>
                <ListItem>
                  <Text color={"blue"} as={"span"} fontWeight={"bold"}>
                    Price:
                  </Text>{" "}
                  {price}Rs
                </ListItem>
                <ListItem>
                  <Text color={"blue"} as={"span"} fontWeight={"bold"}>
                    Catogery:
                  </Text>{" "}
                  {category}
                </ListItem>
                <ListItem>
                  <Text color={"blue"} as={"span"} fontWeight={"bold"}>
                    Description:
                  </Text>{" "}
                  {description}
                </ListItem>
                 
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("green", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}