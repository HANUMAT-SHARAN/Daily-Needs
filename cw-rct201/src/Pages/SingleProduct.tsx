// import { store } from "../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { MdLocalShipping } from "react-icons/md";
import Slider from "react-slick";

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
  ListItem,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getUsersData } from "../Redux/auth/authAction";
import { toast } from "react-toastify";

const settings = {
  dots: true,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

type prod = {
  id: number;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  cost: number;
  description: string;
  cat: string;
  Rating: number;
  name: string;
};

let obj = {
  id: 1,
  image1: "",
  image2: "",
  image3: "",
  image4: "",
  cost: 0,
  description: "",
  cat: "",
  Rating: 0,
  name: "",
};

export default function SingleProduct() {
  const productAdded = () => {
    toast.success("Product Added In Cart Sucessfully", { theme: "colored" });
  };
  const loginNow = () => {
    toast.error("Login Now To Add The Product", { theme: "colored" });
  };
  const dispatch: any = useDispatch();
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });
  const { id } = useParams();
  const { isAuth, currentUser } = useSelector(
    (store: any) => store.authManager
  );
  // console.log(currentUser)

  const [data, setdata] = useState<prod>(obj);
  const [userData, setUserData] = useState([]);

  const {
    image1,
    image2,
    image3,
    image4,
    cost,
    description,
    cat,
    Rating,
    name,
  } = data;

  const cards = [image1, image2, image3, image4];

  const getdata = async () => {
    try {
      let response = await fetch(
        `https://backendsirver-for-daily-needs.vercel.app/products/${id}`
      );
      let data = await response.json();
      setdata(data);
    } catch (error) {}
  };

  useEffect(() => {
    getdata();
    getUserData()  
  }, []);

  const getUserData = async () => {
    try {
      let r = await fetch(
        `https://backendsirver-for-daily-needs.vercel.app/users/${currentUser.id}`
      );
      let d = await r.json();

      setUserData(d.cart);
    } catch (error) {}
  };


  const cartDetails = async () => {
    if (!isAuth) {
      loginNow();
      return;
    }
   
    try {
       await fetch(
        `https://backendsirver-for-daily-needs.vercel.app/users/${currentUser.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart: [
            ...userData,
              { image1, cost, name, quantity: 1, orderId: Date.now() },
            ],
          }),
        }
      );
      
    } catch (error) {}
    setTimeout(() => {
      dispatch(getUsersData());
    }, 1500);
    productAdded();
  };

  return (
    <>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Box
            background={"lightgray"}
            position={"relative"}
            height={"600px"}
            width={"full"}
            overflow={"hidden"}
          >
            {/* CSS files for react-slick */}
            <link
              rel="stylesheet"
              type="text/css"
              charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
              aria-label="left-arrow"
              colorScheme="messenger"
              borderRadius="full"
              position="absolute"
              left={side}
              top={top}
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => slider?.slickPrev()}
            >
              <BiLeftArrowAlt />
            </IconButton>
            {/* Right Icon */}
            <IconButton
              aria-label="right-arrow"
              colorScheme="messenger"
              borderRadius="full"
              position="absolute"
              right={side}
              top={top}
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => slider?.slickNext()}
            >
              <BiRightArrowAlt />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
              {cards.map((url, index) => (
                <Box
                  key={index}
                  height={"3xl"}
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(${url})`}
                />
              ))}
            </Slider>
          </Box>

          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {name}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                ${cost}
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
                  {cat}
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

                <List spacing={2}>
                  <ListItem>
                    <Text color={"blue"} as={"span"} fontWeight={"bold"}>
                      Product Name:
                    </Text>{" "}
                    {name}
                  </ListItem>
                  <ListItem>
                    <Text color={"blue"} as={"span"} fontWeight={"bold"}>
                      Price:
                    </Text>{" "}
                    {cost}Rs
                  </ListItem>
                  <ListItem>
                    <Text color={"blue"} as={"span"} fontWeight={"bold"}>
                      Catogery:
                    </Text>{" "}
                    {cat}
                  </ListItem>
                  <ListItem>
                    <Text color={"blue"} as={"span"} fontWeight={"bold"}>
                      Description:
                    </Text>{" "}
                    {description}
                  </ListItem>
                  <ListItem>
                    <Text color={"blue"} as={"span"} fontWeight={"bold"}>
                      Rating:
                    </Text>{" "}
                    {Rating}
                  </ListItem>
                </List>
              </Box>
            </Stack>

            <Button
              onClick={cartDetails}
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

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Container maxW={"7xl"} py={12} marginTop={"-6%"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={""}
              alignSelf={"flex-start"}
              rounded={"md"}
              textAlign={"center"}
            >
              Specification
            </Text>
            <Heading>{description}</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </Text>
          </Stack>
          <Flex background={"lightgray"}>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={image1}
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>

      <Container maxW={"7xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex marginTop={"-13%"} background={"lightgray"}>
            <Image
              marginTop={""}
              rounded={"md"}
              alt={"feature image"}
              src={image2}
              objectFit={"cover"}
            />
          </Flex>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={""}
              alignSelf={"flex-start"}
              rounded={"md"}
              textAlign={"center"}
            >
              Specification
            </Text>
            <Heading>{description}</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>

      <Container maxW={"7xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={""}
              alignSelf={"flex-start"}
              rounded={"md"}
              textAlign={"center"}
            >
              Specification
            </Text>
            <Heading>{description}</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </Text>
          </Stack>
          <Flex marginTop={"-13%"} background={"lightgray"}>
            <Image
              marginTop={""}
              rounded={"md"}
              alt={"feature image"}
              src={image3}
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>

      <Container maxW={"7xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex marginTop={"-13%"} background={"lightgray"}>
            <Image
              marginTop={""}
              rounded={"md"}
              alt={"feature image"}
              src={image4}
              objectFit={"cover"}
            />
          </Flex>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={""}
              alignSelf={"flex-start"}
              rounded={"md"}
              textAlign={"center"}
            >
              Specification
            </Text>
            <Heading>{description}</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
}

// function dispatch(arg0: (dispatch: any) => Promise<void>) {
//   throw new Error("Function not implemented.");
// }
