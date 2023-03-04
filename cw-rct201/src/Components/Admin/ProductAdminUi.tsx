import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Text, Avatar, Flex, Button } from "@chakra-ui/react";
import React from "react";
import { SingleAdminPropsType } from "./AdminProps";

const ProductAdminUi = ({
  id,
  image1,
  name,
  category,
  cost,
  setUpdateOpen,
  setDeleteOpen,
}: SingleAdminPropsType) => {
  return (
    <div>
      <Box
        p={"10px 0px 10px 0px"}
        borderRadius={"1rem"}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
        textAlign={"center"}
      >
        <Box
          margin={"auto"}
          width={"40%"}
          backgroundColor={"white"}
          backdropFilter={"blur(20px)"}
          borderRadius={"2rem"}
        >
          <Avatar size={"xl"} src={image1} />
        </Box>
        <Text mt={1} fontWeight={"bold"} fontSize={"16px"}>
          {" "}
          Name : {name}
        </Text>
        <Text mt={1} fontWeight={"bold"} fontSize={"16px"}>
          {" "}
          Category : {category}
        </Text>
        <Text mt={1} fontWeight={"bold"} fontSize={"16px"}>
          Product Id : {id}
        </Text>
        <Text mt={1} fontWeight={"bold"} fontSize={"16px"}>
          Price : ₹ {cost}
        </Text>
        <Flex mt={3} margin={"auto"} w={"60%"} justifyContent={"space-evenly"}>
          <Button colorScheme="blue" onClick={() => setUpdateOpen(true)}>
            <EditIcon />
          </Button>
          <Button onClick={() => setDeleteOpen(true)} colorScheme="blue">
            <DeleteIcon />
          </Button>
        </Flex>
        <></>
      </Box>
    </div>
  );
};

export default ProductAdminUi;
