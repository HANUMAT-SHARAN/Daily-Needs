import React from "react";
import { productsApi } from "../../api/ProductsApi";
import { Data } from "../../Pages/MobileProducts";
import { Heading, Button, Flex, SimpleGrid, Box } from "@chakra-ui/react";
import AdminSingleProduct from "./AdminSingleProduct";
import Loader from "../Loader";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { store } from "../../Redux/store";

import { useSelector, useDispatch } from "react-redux";
import { sendDataToRedux } from "../../Redux/admin/adminAction";

const AdminProducts = () => {
  const dispatch: any = useDispatch();
  const [data, setData] = React.useState<any[]>([]);
  const { productsData } = useSelector((store: any) => store.productsManager);
  const [loader, setLoader] = React.useState<boolean>(false);

  const getData = async () => {
    try {
      let response = await productsApi();

      setData(response);
    } catch (error) {}
  };

  const loading = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  };

  React.useEffect(() => {
    getData();
  }, [data]);

  React.useEffect(() => {
    loading();
  }, []);
  return (
    <div>
      <SimpleGrid
        gap={5}
        columns={[1, 2, 3, 4]}
        margin={"auto"}
        w={"90%"}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
      >
        {data.map((el: Data) => {
          return (
            <>
              {loader ? <Loader /> : <AdminSingleProduct key={el.id} {...el} />}
            </>
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default AdminProducts;
