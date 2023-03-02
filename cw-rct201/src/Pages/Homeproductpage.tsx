import React, { useEffect, useState } from "react";
import "../App.css";
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
  Spinner,
} from "@chakra-ui/react";
import SearchCard from "../Components/SearchCard";
import { Search2Icon } from "@chakra-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";
import { store } from "../Redux/store";
import { useSelector } from "react-redux";
export type proCardProps = {
  name?: string;
  description?: string;
  cost?: number;
  id?: number;
  image1?: string;
};

const HomeProductPage = () => {
  const [loading, setloading] = useState(false);
  const { category } = useSelector((store: any) => store.CatManager);

  const [searchText, setSearchText] = React.useState<string>(category);
  const [data, setData] = React.useState<proCardProps[]>([]);

  const searchData = async (searchText: string) => {
    setloading(true);
    let response = await fetch(
      `https://backendsirver-for-daily-needs.vercel.app/products?category=${category}`
    );
    setloading(false);
    setData(await response.json());
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

      <Center w="100vw">
        {loading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : (
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
        )}
      </Center>
    </>
  );
};

export default HomeProductPage;
