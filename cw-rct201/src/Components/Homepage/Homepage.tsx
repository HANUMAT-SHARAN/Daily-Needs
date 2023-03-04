import { Image, Text, Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUsersData } from "../../Redux/auth/authAction";
import { getcategory } from "../../Redux/categorysorting/category.action";
import ProductCategory from "./category/CoroselCategory";
import Collection2 from "./Collections/Collection2";
import "./Homepage.css";
import NewArrival from "./New Arrival/NewArrival";
import Story from "./our Story/Story";
import Collection from "./studiocollection/Collection";


const Homepage = () => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  const bagcategory = () => {
    dispatch(getcategory("bag"));
    navigate("/homeproductpage");
  };
  const watchcategory = () => {
    dispatch(getcategory("watchband"));
    navigate("/homeproductpage");
  };
  React.useEffect(() => {
    dispatch(getUsersData());
  }, []);
  return (
    <div>
      <div>
        <img
          className="front-flex-img"
          src="https://images.dailyobjects.com/marche/assets/images/other/republicsale-home-page-desktop.png?tr=cm-pad_resize,v-2,w-1351,dpr-1"
          alt=""
        />
      </div>
      <div>
        <img
          onClick={() => bagcategory()}
          className="front-flex-img"
          src="https://images.dailyobjects.com/marche/assets/images/other/backpack-desktops.jpg?tr=cm-pad_crop,v-2,w-1351,dpr-1"
          alt=""
        />
      </div>
      <ProductCategory />
      <div>
        <Image
          className="front-flex-img"
          onClick={() => watchcategory()}
          src="https://images.dailyobjects.com/marche/assets/images/other/watchbands-desktops.jpg?tr=cm-pad_crop,v-2,w-1351,dpr-1"
          alt=""
        />
      </div>
      <div>
        <Collection />
      </div>
      <div>
        <Image
          className="front-flex-img"
          src="https://images.dailyobjects.com/marche/assets/images/other/messenger-bags-desktops.jpg?tr=cm-pad_crop,v-2,w-1351,dpr-1"
        />
      </div>
      <div>
        <NewArrival />
      </div>
      <div>
        <Collection2 />
      </div>
      <Story />
    </div>
  );
};

export default Homepage;
