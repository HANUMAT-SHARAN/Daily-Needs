import React from "react";
import {
  Box,
  HStack,
  Image,
  Text,
  Input,
  Button,
  VStack,
  Link,
  ListItem,
  List,
  Show,
  Flex,
} from "@chakra-ui/react";
const Footer = () => {
  return (
    <>
      <Box
        bgColor="#f7f7f7"
        w="100%"
        h={{ sm: "130px", lg: "300px" }}
        pt="20px"
      >
        <Box h="30%">
          <Text
            fontWeight={"600"}
            color="#202020"
            fontSize={"25px"}
            textAlign="center"
          >
            FEATURED IN
          </Text>
        </Box>
        <Box h="70%">
          <Image src="https://images.dailyobjects.com/marche/icons/press-desktop.png?tr=cm-pad_resize,v-2,w-1349,h-200,dpr-1" />
        </Box>
      </Box>
      <VStack
        gap={"30px"}
        p="30px 10px 20px 10px"
        h="300px"
        w="100%"
        mt="5px"
        bgColor="#f7f7f7"
      >
        <Text fontWeight={"700"} fontSize="22px">
          GET EXCLUSIVE ACCESS TO NEW PRODUCTS, DEALS & SURPRISE TREATS
        </Text>
        <HStack>
          <Input placeholder="Enter Your Email" />
          <Button>Subscribe</Button>
        </HStack>
        <HStack>
          <HStack>
            <Image src="https://images.dailyobjects.com/marche/icons/social/quick-delivery.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1" />
            <Text>Quick Delivery</Text>
          </HStack>
          <HStack>
            <Image src="https://images.dailyobjects.com/marche/icons/social/easy-returns.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1" />
            <Text>Easy Returns</Text>
          </HStack>
          <HStack>
            <Image src="https://images.dailyobjects.com/marche/icons/social/quality-assured.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1" />
            <Text>Quality Assured</Text>
          </HStack>
        </HStack>
      </VStack>
      <Show above="800px">
        <HStack w="100%" h="400px" mt="5px" bgColor="#f7f7f7">
          <HStack w="70%" h="90%" borderRight="1px solid #999">
            <VStack w="30%" h="100%">
              <Text fontSize="17px" textAlign="left" fontWeight="bold">
                KNOW US
              </Text>
              <Text fontSize="17px" textAlign="left">
                About DailyNeeds
              </Text>
              <Text fontSize="17px" textAlign="left">
                Blog
              </Text>
            </VStack>
            <VStack w="30%" h="100%">
              <Text w="70%" fontSize="17px" textAlign="left" fontWeight="bold">
                HELPDESK
              </Text>
              <List fontSize="17px" textAlign="left" spacing={2}>
                <ListItem>
                  <Link>Terms Of Use</Link>{" "}
                </ListItem>
                <ListItem>
                  <Link>Warranty Policy</Link>
                </ListItem>
                <ListItem>
                  <Link>Shipping Policy</Link>
                </ListItem>
                <ListItem>
                  <Link>Cancellation Policy</Link>
                </ListItem>
                <ListItem>
                  <Link>Return and Exchange Policy</Link>
                </ListItem>
                <ListItem>
                  <Link>Privacy & Security Policy</Link>
                </ListItem>
              </List>
            </VStack>
            <VStack w="30%" h="100%">
              <Text w="50%" fontSize="17px" textAlign="left" fontWeight="bold">
                NETWORK
              </Text>
              <List fontSize="17px" textAlign="left" spacing={2}>
                <ListItem>
                  <Link>Contact Us</Link>{" "}
                </ListItem>
                <ListItem>
                  <Link>Corporate Gifting</Link>
                </ListItem>
              </List>
            </VStack>
          </HStack>

          <VStack w="30%" h="90%">
            <Box h="50%">
              <Text
                fontWeight={"600"}
                color="#202020"
                fontSize={"25px"}
                textAlign="center"
              >
                FOLLOW US ON
              </Text>
              <HStack>
                <Image src="https://images.dailyobjects.com/marche/icons/social/instagram.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1"></Image>
                <Image src="https://images.dailyobjects.com/marche/icons/social/facebook.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1"></Image>
                <Image src="https://images.dailyobjects.com/marche/icons/social/youtube.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1"></Image>
                <Image src="https://images.dailyobjects.com/marche/icons/social/twitter.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1"></Image>
                <Image src="https://images.dailyobjects.com/marche/icons/social/pinterest.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1"></Image>
              </HStack>
            </Box>
            <Box h="50%">
              <Text
                fontWeight={"600"}
                color="#202020"
                fontSize={"25px"}
                textAlign="center"
              >
                DOWNLOAD OUR APP
              </Text>
              <HStack>
                <Image src="https://images.dailyobjects.com/marche/icons/android.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1"></Image>
                <Image src="https://images.dailyobjects.com/marche/icons/IOS.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1"></Image>
              </HStack>
            </Box>
          </VStack>
        </HStack>
      </Show>
      <Show below="800px">
        <VStack w="100%" h="300px" p="20px 0px" mt="5px" bgColor="#f7f7f7">
          {/* <HStack w="70%" h="90%" borderRight="1px solid #999">
      <VStack w="30%" h="100%">
    <Text  fontSize="17px" textAlign="left" fontWeight="bold">KNOW US</Text>
      <Text fontSize="17px" textAlign="left" >About DailyNeeds</Text>
      <Text fontSize="17px" textAlign="left" >Blog</Text>
      
    </VStack>
    <VStack w="30%" h="100%">
      <Text w="70%" fontSize="17px" textAlign="left" fontWeight="bold">HELPDESK</Text>
      <List fontSize="17px" textAlign="left" spacing={2}>
      <ListItem><Link>Terms Of Use</Link> </ListItem>
       <ListItem><Link>Warranty Policy</Link></ListItem>
       <ListItem><Link>Shipping Policy</Link></ListItem>
       <ListItem><Link>Cancellation Policy</Link></ListItem>
       <ListItem><Link>Return and Exchange Policy</Link></ListItem>
       <ListItem><Link>Privacy & Security Policy</Link></ListItem>
       
       
     </List>
    </VStack>
    <VStack w="30%" h="100%">
      <Text w="50%" fontSize="17px" textAlign="left" fontWeight="bold">NETWORK</Text>
      <List fontSize="17px" textAlign="left" spacing={2}>
      <ListItem><Link>Contact Us</Link> </ListItem>
       <ListItem><Link>Corporate Gifting</Link></ListItem>
       
       
       
     </List>
    </VStack>
      </HStack> */}

          <VStack w="100%" h="90%">
            <Box h="50%">
              <Text
                fontWeight={"600"}
                color="#202020"
                fontSize={"25px"}
                textAlign="center"
              >
                FOLLOW US ON
              </Text>
              <HStack>
                <Image src="https://images.dailyobjects.com/marche/icons/social/instagram.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1"></Image>
                <Image src="https://images.dailyobjects.com/marche/icons/social/facebook.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1"></Image>
                <Image src="https://images.dailyobjects.com/marche/icons/social/youtube.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1"></Image>
                <Image src="https://images.dailyobjects.com/marche/icons/social/twitter.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1"></Image>
                <Image src="https://images.dailyobjects.com/marche/icons/social/pinterest.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1"></Image>
              </HStack>
            </Box>
            <Box h="50%" pt="30px" borderTop="1px solid #999">
              <Text
                fontWeight={"600"}
                color="#202020"
                fontSize={"25px"}
                textAlign="center"
              >
                DOWNLOAD OUR APP
              </Text>
              <HStack>
                <Image src="https://images.dailyobjects.com/marche/icons/android.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1"></Image>
                <Image src="https://images.dailyobjects.com/marche/icons/IOS.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1"></Image>
              </HStack>
            </Box>
          </VStack>
        </VStack>
      </Show>
      <Box pt="30px" h="auto" w="100%" mt="5px" bgColor="#f7f7f7">
        <Text
          fontWeight={"600"}
          color="#202020"
          fontSize={"25px"}
          textAlign="center"
        >
          100% SECURE PAYMENT
        </Text>
        <Flex p="20px" justify={"center"} gap="5px" flexWrap={"wrap"}>
          <Image src="https://images.dailyobjects.com/marche/icons/payments/amex-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1"></Image>
          <Image src="https://images.dailyobjects.com/marche/icons/payments/maestro-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1"></Image>
          <Image src="https://images.dailyobjects.com/marche/icons/payments/mastercard-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1"></Image>
          <Image src="https://images.dailyobjects.com/marche/icons/payments/mobikwik-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1"></Image>
          <Image src="https://images.dailyobjects.com/marche/icons/payments/paytm-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1"></Image>
          <Image src="https://images.dailyobjects.com/marche/icons/payments/rupay-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1"></Image>
          <Image src="https://images.dailyobjects.com/marche/icons/payments/upi-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1"></Image>
          <Image src="https://images.dailyobjects.com/marche/icons/payments/visa-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1"></Image>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
