import React, { useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import {
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Button,
  Flex,
  SimpleGrid,
  Image,
  Text,
  GridItem,
  Grid,
  Center,
  Box,
} from "@chakra-ui/react";
import SearchCard from "../Components/SearchCard";
import { Search2Icon } from "@chakra-ui/icons";
import axios from "axios";
export type proCardProps = {
  name?: string;
  description?: string;
  cost?: number;
  id?: number;
  image1?: string;
};

const LaptopProductPage = () => {
  const [searchText, setSearchText] = React.useState<string>("lenovo");
  const [data, setData] = React.useState<proCardProps[]>([]);

  const searchData = async (searchText: string) => {
  
    let response = await axios.get(
      `https://backendsirver-for-daily-needs.vercel.app/products?category=${searchText}`
    );
    setData(response.data);
  };

  useEffect(() => {
    searchData(searchText);
  }, [searchText]);

  return (
    <>
      <Image
        width={"100%"}
        src="https://images.dailyobjects.com/marche/assets/images/other/republicsale-home-page-desktop.png?tr=cm-pad_resize,v-2,w-1366,dpr-1"
      />
      <Text
        textAlign={"center"}
        fontSize="40px"
        marginTop={"30px"}
        fontWeight={"bold"}
      >
        Laptops
      </Text>
      <Flex justifyContent={"center"} gap="30px" marginTop={"10px"}>
        <Image
          width={"75px"}
          height="75px"
          borderRadius={"50%"}
          border="1px solid black"
          src="https://dlcdnimgs.asus.com/websites/IN/Sno/91059.jpg"
          onClick={() => setSearchText("Asus")}
          alt=""
        />

        <Image
          width={"75px"}
          height="75px"
          borderRadius={"50%"}
          border="1px solid black"
          src="https://assets.gadgets360cdn.com/pricee/assets/brand/og_lenovo-_logo.png"
          onClick={() => setSearchText("lenovo")}
          alt=""
        />

        <Image
          width={"75px"}
          height="75px"
          borderRadius={"50%"}
          border="1px solid black"
          onClick={() => setSearchText("hp")}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1200px-HP_logo_2012.svg.png"
          alt=""
        />
        <Image
          width={"75px"}
          height="75px"
          borderRadius={"50%"}
          border="1px solid black"
          onClick={() => setSearchText("Dell")}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/1200px-Dell_logo_2016.svg.png"
          alt=""
        />
      </Flex>
      <Center w="100vw">
        <Grid className="laptop_grid" padding={"30px"}>
          {data.map((el) => {
            return (
              <Link to={`/product/${el.id}`}>
                <GridItem className="shrink_img">
                  <Box className="productpage" height={"300px"}>
                    <Image src={el.image1} />
                  </Box>
                  <Text marginLeft={"20px"}>{el.name}</Text>
                  <Text marginLeft={"20px"} fontWeight={"bold"}>
                    Rs. {el.cost}
                  </Text>
                  <Button
                    colorScheme="facebook"
                    borderRadius={"0%"}
                    backgroundColor={"black"}
                    width={"100%"}
                  >
                    Add To Cart
                  </Button>
                </GridItem>
              </Link>
            );
          })}
        </Grid>
      </Center>
    </>
  );
};

export default LaptopProductPage;
