import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";
import axios from "axios";
import { Link } from "react-router-dom";
import SimpleSidebar from "./sidebar";
export interface Data {
  image1: string;
  image2: string;
  image3?: string;
  image4?: string;
  cost: number;
  description: string;
  id: number;
  Rating: number;

  category: string;
  name: string;

  cat: string;
}
const MainPage1 = () => {
  const [Iphone, setIphone] = useState<Data[]>([]);
  const [category, setcategory] = useState<string>("Apple");
  const [rating, setrating] = useState<string>("asc");
  const getData = async (category: string, rating: string) => {
    return await axios
      .get(
        `https://backendsirver-for-daily-needs.vercel.app/products?category=${category}&_sort=cost&_order=${rating}`
      )
      .then((res) => setIphone(res.data));
  };

  const [time, setTimer] = useState<number>(0);
  const filter = [
    "hp",
    "cases",
    "Asus",
    "lenovo",
    "tote bag",
    "Dell",
    "watchband",
    "bag",
  ];
  useEffect(() => {
    setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime > filter.length-1) {
          return 0;
        }
        return prevTime + 1;
      });
    }, 4000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setcategory(filter[time]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  useEffect(() => {
    getData(category, rating);
  }, [category, rating]);

  const setCurrentCat = (value: string) => {
    setcategory(value);
  };
  const setOrder = (value: string) => {
    setrating(value);
  };

  return (
    <div>
      <Flex display={["block", "grid"]}>
        <Box>
          <SimpleSidebar
            setOrder={setOrder}
            setCurrentCat={setCurrentCat}
            children={undefined}
          />
        </Box>
        <Box
          width={"80%"}
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          maxW="7xl"
          mx="auto"
          mr={"35"}
          px={{
            base: "4",
            md: "8",
            lg: "12",
          }}
          py={{
            base: "6",
            md: "8",
            lg: "12",
          }}
        >
          <ProductGrid>
            {Iphone.map((product) => (
              <Link to={`/product/${product.id}`}>
                <ProductCard key={product.id} product={product} />
              </Link>
            ))}
          </ProductGrid>
        </Box>
      </Flex>
    </div>
  );
};

export default MainPage1;
