import React, { useState, useEffect } from "react";
import {
  Heading,
  Stack,
  Text,
  Divider,
  Button,
  Box,
  HStack,
  Image,
} from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserCart } from "../../Redux/auth/authAction";
interface cartItems {
  image1: string;
  name: string;
  cost: string;
  quantity: number;
  orderId: any;
}
type Props = {
  objProp: cartItems;
  funcProp: (orderId: string) => void;
  funcquant: (orderId: string, num: number) => void;
};

const CartItems = ({ objProp, funcProp, funcquant }: Props) => {
  const { orderId, name, cost, quantity, image1 } = objProp;
  const { currentUser } = useSelector((store: any) => store.authManager);
  const { loginUsersData } = useSelector((store: any) => store.authManager);
  const dispatch: any = useDispatch();

  return (
    <Card alignItems="center" margin={"auto"} textAlign="center" h="auto">
      <CardBody textAlign="center">
        <Image src={image1} alt="error" borderRadius="lg" />
        <Stack textAlign="center" mt="2" spacing="3">
          <Heading textAlign={"center"} size="md">
            {name}
          </Heading>

          <Text align={"center"} color="blue.600" fontSize="2xl">
            ₹ {cost}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter textAlign="center">
        <HStack textAlign="center" justifyContent={"space-between"} gap="30px">
          <Button
            textAlign="center"
            onClick={() => funcProp(orderId)}
            variant="solid"
            colorScheme="blue"
          >
            Remove
          </Button>
          <HStack>
            <Button
              isDisabled={quantity === 1}
              bgColor="#3182ce"
              w="10px"
              color="white"
              onClick={() => funcquant(orderId, -1)}
              variant="ghost"
              colorScheme="blue"
            >
              -
            </Button>
            <Box>{quantity}</Box>
            <Button
              bgColor="#3182ce"
              w="10px"
              color="white"
              onClick={() => funcquant(orderId, 1)}
              variant="ghost"
              colorScheme="blue"
            >
              +
            </Button>
          </HStack>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default CartItems;
