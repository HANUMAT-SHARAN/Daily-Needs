import {
    AspectRatio,
    Box,
    Button,
    HStack,
    Image,
    Link,
    Skeleton,
    Stack,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { FavouriteButton } from "./FavouriteButton";
  import { PriceTag } from "./PriceTag";
  import {RatingCom} from "./Rating"
  export const ProductCard = (props:any) => {
    console.log(props);
    const { product, rootProps } = props;
    const { name, image4, cost, Rating } = product;
    return (
      <Stack borderWidth="1px"
      rounded="lg"
      padding={"15px"}
      shadow="lg"
        spacing={{
          base: "4",
          md: "5",
        }}
        {...rootProps}
      >
        <Box position="relative" >
          <AspectRatio ratio={4 / 3}>
            <Image
              src={image4}
              alt={name}
              draggable="false"
              fallback={<Skeleton />}
              borderRadius={{
                base: "md",
                md: "xl",
              }}
            />
          </AspectRatio>
          <FavouriteButton
            position="absolute"
            top="4"
            right="4"
            aria-label={`Add ${name} to your favourites`}
          />
        </Box>
        <Stack>
          <Stack spacing="1">
            <Text
              fontWeight="medium"
              color={useColorModeValue("gray.700", "gray.400")}
            >
              {name}
            </Text>
            <PriceTag price={cost}  currency="USD" />
          </Stack>
          <HStack>
            <RatingCom defaultValue={Rating} size="md" />
            <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
              12 Reviews
            </Text>
          </HStack>
        </Stack>
        <Stack align="center">
          <Button colorScheme="blue" width="full">
            Add to cart
          </Button>
          <Link
            textDecoration="underline"
            fontWeight="medium"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            Quick shop
          </Link>
        </Stack>
      </Stack>
    );
  };
  