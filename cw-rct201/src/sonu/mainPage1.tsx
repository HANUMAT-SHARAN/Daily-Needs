import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";
import axios from "axios";
import { Link } from "react-router-dom";
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
  // const getData = async (category, rating) => {
  //   return await axios
  //     .get(
  //       `https://koti-api.onrender.com/iphone`
  //     )
  //     .then((res) => setProducts(res.data));
  // };
  // console.log(products)

  const [Iphone, setIphone] = useState<Data[]>([]);
  const [category, setcategory] = useState<string>("Apple");
  const [rating, setrating] = useState<string>("asc");
  const getData = async (category: string, rating: string) => {
    return await axios
      .get(
        `https://koti-api.onrender.com/iphone?cat=${category}&_sort=cost&_order=${rating}`
      )
      .then((res) => setIphone(res.data));
  };
  useEffect(() => {
    getData(category, rating);
  }, [category, rating]);

  return (
    <div>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        maxW="7xl"
        mx="auto"
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
    </div>
  );
};

export default MainPage1;
