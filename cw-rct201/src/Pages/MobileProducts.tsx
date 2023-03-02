import axios from "axios";
import { useEffect, useState } from "react";
import "../Components/MobileProducts/Card.css";
import { Image } from "@chakra-ui/react";
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

  category: string;
  name: string;
  
  cat: string;
}

const MobileProducts = () => {
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
  //pricesorting  ratingsorting goodUI
  return (
    <div>
      <div className="Display">
        <div id="photo" onClick={() => setcategory("Apple")}>
          <Image
            src="https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-vulcan-case-cover-for-iphone-13-images/DailyObjects-Prima-Case-Cover-For-iPhone-13.png?tr=cm-pad_resize,v-2,w-640,h-519,dpr-1"
            alt="apple"
          />
          <center id="contact">Apple</center>
        </div>
        <div id="photo" onClick={() => setcategory("samsung")}>
          <Image
            src="https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-3-of-cups-glass-case-cover-for-samsung-galaxy-a33-images/DailyObjects-3-Of-Cups-Glass-Case-Cover-For-Samsung-Galaxy-A33.png?tr=cm-pad_resize,v-2,w-640,h-519,dpr-1"
            alt="samsung"
          />
          <center id="contact">Samsung</center>
        </div>
        <div id="photo" onClick={() => setcategory("OnePlus")}>
          <Image
            src="https://images.dailyobjects.com/marche/product-images/1701/dailyobjects-commando-series-black-clear-case-cover-for-oneplus-nord-images/DailyObjects-Commando-Series-Black-Clear-Case-Cover-For-OnePlus-Nord-view.png?tr=cm-pad_resize,v-2,w-640,h-519,dpr-1"
            alt="Oneplus"
          />
          <center id="contact">Oneplus</center>
        </div>
        <div id="photo" onClick={() => setcategory("Oppo")}>
          <Image
            src="https://images.dailyobjects.com/marche/product-images/1102/dailyobjects-terracotta-red-snapon-envelope-sleeve-for-ipad-pro-11-2021-images/DailyObjects-Terracotta-Red-SnapOn-Envelope-Sleeve-For-iPad-Pro-11-2021-vw.png?tr=cm-pad_resize,v-2,w-640,h-519,dpr-1"
            alt="Oppo"
          />
          <center id="contact">Oppo</center>
        </div>
        <div id="photo" onClick={() => setcategory("Motorola")}>
          <Image
            src="https://images.dailyobjects.com/marche/product-images/1102/dailyobjects-attitude-flipstand-tri-fold-case-for-ipad-mini-6-images/DailyObjects-Attitude-FlipStand-Tri-Fold-Case-for-iPad-Mini-6-2.png?tr=cm-pad_resize,v-2,w-640,h-519,dpr-1"
            alt="Motorola"
          />
          <center id="contact">Motorla</center>
        </div>
        <div id="photo" onClick={() => setcategory("Google")}>
          <Image
            src="https://images.dailyobjects.com/marche/product-images/1102/dailyobjects-space-blue-snapon-envelope-sleeve-for-ipad-pro-11-2021-images/DailyObjects-Space-Blue-SnapOn-Envelope-Sleeve-For-iPad-Pro-11-2021-vw.png?tr=cm-pad_resize,v-2,w-640,h-519,dpr-1"
            alt="Goggle"
          />
          <center id="contact">Goggle</center>
        </div>
      </div>

      {/* <div style={{display:"flex",justifyContent:"end"}}>
      <p>Sort according to Rating</p>
      <Button onClick={() => setrating("asc")}>increasing Order</Button>
      <Button onClick={() => setrating("desc")}>Descending Order</Button>
      </div> */}
      <div className="matter">
        {Iphone.map((el) => {
          return (
            <Link to={`/product/${el.id}`}>
              <Card
                key={el.id}
                id={el.id}
                image1={el.image1}
                description={el.description}
                category={el.category}
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
