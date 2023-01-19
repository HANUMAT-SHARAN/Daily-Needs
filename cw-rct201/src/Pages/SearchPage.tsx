import React from "react";
import {
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Button,
  Flex,
  SimpleGrid,
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

const SearchPage = () => {
  const [searchText, setSearchText] = React.useState<string>("");
  const [data, setData] = React.useState<proCardProps[]>([]);

  const searchData = async (searchText: string) => {
    console.log(searchText);
    let response = await axios.get(
      `http://localhost:4040/products?q=${searchText}`
    );
    setData(response.data);
  };
  return (
    <>
      <Stack spacing={4}>
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
     

      <SimpleGrid columns={[2,3,3,4]} spacing={[5,10,10]}>
        {data.map((el) => (
          <SearchCard  key={el.id} {...el} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default SearchPage;
