import React from "react";
import {
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Button,
  Flex,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import Loader from "../Components/Loader";
import SearchCard from "../Components/SearchCard";
import { Search2Icon } from "@chakra-ui/icons";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
export type proCardProps = {
  name?: string;
  description?: string;
  cost?: number;
  id?: number;
  image1?: string;
};

const SearchPage = () => {

  const nav=useNavigate()
  const [searchText, setSearchText] = React.useState<string>("");
  const [data, setData] = React.useState<proCardProps[]>([]);

  const searchData = async (searchText: string) => {

    let response = await axios.get(
      `https://backendsirver-for-daily-needs.vercel.app/products?q=${searchText}&_limit=5`
    );
    setData(response.data);
  };
  return (
    <>
      <Stack border="5 px solid red" spacing={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
          <Input
          onInput={()=>searchData(searchText)}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search Products"
          />
        </InputGroup>
      </Stack>
     

      <SimpleGrid columns={[1,2,3,4]} spacing={[5,10,10]}>
        {data.map((el) => (

        <Box onClick={()=>nav(`/product/${el.id}`)}>

     <SearchCard   key={el.id} {...el} />
        </Box>
))}
      </SimpleGrid>
    </>
  );
};

export default SearchPage;
