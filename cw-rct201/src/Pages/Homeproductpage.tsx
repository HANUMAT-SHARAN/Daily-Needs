import React, { useEffect } from "react";
import "../App.css"
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
import { Link } from "react-router-dom";
export type proCardProps = {
  name?: string;
  description?: string;
  cost?: number;
  id?: number;
  image1?: string;
};

const HomeProductPage = () => {
  const [searchText, setSearchText] = React.useState<string>("lenovo");
  const [data, setData] = React.useState<proCardProps[]>([]);

  const searchData = async (searchText: string) => {
    console.log(searchText);
    let response = await axios.get(
      `http://localhost:4040/products`
    );
    setData(response.data);
  };

  useEffect(()=>{
    searchData(searchText)
  },[searchText])
  
  
  return (
    <>
    <Image width={"100%"} src="https://images.dailyobjects.com/marche/assets/images/other/republicsale-home-page-desktop.png?tr=cm-pad_resize,v-2,w-1366,dpr-1" />
   
    <Center w="100vw">
          <Grid className="laptop_grid" padding={"30px"} >
            {data.map((el)=>{
                return  <GridItem className='shrink_img'  >
                    <Box className="productpage" height={"300px"} >
                         <Image    src={el.image1}  />
                  
                    </Box>
                    <Text marginLeft={"20px"} >{el.name}</Text>
                    <Text marginLeft={"20px"}  fontWeight={"bold"}>Rs. {el.cost}</Text>
                    
                    <Button colorScheme='facebook' borderRadius={"0%"} backgroundColor={"black"} width={"100%"} >Add To Cart</Button>
                </GridItem>
            })}
         
          </Grid>
        </Center>
    
    </>
  );
};

export default HomeProductPage;
