import axios from "axios";
import { useEffect, useState } from "react";
import "../Components/MobileProducts/Card.css";
import { Button, Select } from "@chakra-ui/react";
import Card from "../Components/MobileProducts/Card";
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
  cat: string;
}

const MobileProducts = () => {
  const [Iphone, setIphone] = useState<Data[]>([]);
  const [category, setcategory] = useState<string>("Apple");
  const [rating, setrating] = useState<string>("asc");
  const getData = async (category: string, rating: string) => {
    return await axios
      .get(
        `https://ravi-api.onrender.com/iphone?cat=${category}&_sort=cost&_order=${rating}`
      )
      .then((res) => setIphone(res.data));
  };
  useEffect(() => {
    getData(category, rating);
  }, [category, rating]);
  //pricesorting  ratingsorting goodUI 
  return (
    <div>
      <Select
        className="props"
        placeholder="catogery"
        onChange={(e) => setcategory(e.target.value)}
      >
        <option value="Apple">Apple</option>
        <option value="samsung">samsung</option>
        <option value="OnePlus">OnePlus</option>
        <option value="Oppo" >Oppo</option>
        <option value="Motorola">Motorola</option>
        <option value="iPad">iPad</option>
      </Select>
      <div style={{display:"flex",justifyContent:"end"}}>
      <p>Sort according to Rating</p>
      <Button onClick={() => setrating("asc")}>increasing Order</Button>
      <Button onClick={() => setrating("desc")}>Descending Order</Button>
      </div>
      <div className="matter" >
        {Iphone.map((el) => {
          return (
            <Link to={`/product/${el.id}`}>
              <Card  key={el.id}
                id={el.id}
                image1={el.image1}
                description={el.description}
                catogery={el.cat}
                cost={el.cost}
                Rating={el.Rating}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileProducts;
