import axios from "axios";
import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { Data } from "../../Pages/MobileProducts";
import {
  nameSuccess,
  categorySuccess,
  priceSuccess,
  imageUpdate,
  deleteSuccess,
} from "./ToastAlert";
import UpdateAccordian from "./UpdateAccordian";
import ProductAdminUi from "./ProductAdminUi";

const AdminSingleProduct = ({ image1, id, name, cost, category }: Data) => {
  const [updateOpen, setUpdateOpen] = React.useState<boolean>(false);
  const [alertDeleteOpen, setDeleteOpen] = React.useState<boolean>(false);

  const cancelRef = React.useRef<any>();
  //user ref returns a object in which ther is mutuable value in form of current 
//this upper cancelRef is used to make the Focus on Dailog box so that user know what is clear focus
//s that it can be prevented the user to differentitate between the fouced and nonfocused one
  const updateName = (id: number, newName: string) => {
    let obj = {
      name: newName,
    };
    axios.patch(
      `https://backendsirver-for-daily-needs.vercel.app/products/${id}`,
      obj
    );

    setUpdateOpen(false);

    setTimeout(() => {}, 1500);

    nameSuccess();
  };
  const updatePrice = (id: number, newprice: string) => {
    //this + sign will convert the string Price into Number and then post to the data base
    let obj = {
      cost: +newprice,
    };
    axios.patch(
      `https://backendsirver-for-daily-needs.vercel.app/products/${id}`,
      obj
    );

    setUpdateOpen(false);
    setTimeout(() => {
      priceSuccess();
    }, 1500);
  };
  const deleteproduct = (id: number) => {
    axios.delete(
      `https://backendsirver-for-daily-needs.vercel.app/products/${id}`
    );
    setDeleteOpen(false);
    setUpdateOpen(false);
    setTimeout(() => {
      deleteSuccess();
    }, 1500);
  };
  const updateCategory = (id: number, newCat: string) => {
    let obj = {
      id,
      category: newCat,
    };
    axios.patch(
      `https://backendsirver-for-daily-needs.vercel.app/products/${id}`,
      obj
    );
    setUpdateOpen(false);
    setTimeout(() => {
      categorySuccess();
    }, 1500);
  };
  const updateImage = (id: number, newImage: string) => {
    let obj = {
      image1: newImage,
    };
    axios.patch(
      `https://backendsirver-for-daily-needs.vercel.app/products/${id}`,
      obj
    );

    setUpdateOpen(false);
    setTimeout(() => {
      imageUpdate();
    }, 1500);
  };
  return (
    <>
      <AlertDialog
        isOpen={alertDeleteOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => setDeleteOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Product
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => setDeleteOpen(false)}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => deleteproduct(id)}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <AlertDialog
        isOpen={updateOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => setUpdateOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Update {name} Product Details
            </AlertDialogHeader>

            <AlertDialogBody>
              <UpdateAccordian
                id={id}
                updateCategory={updateCategory}
                updateName={updateName}
                updatePrice={updatePrice}
                updateImage={updateImage}
              />
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                colorScheme="red"
                ref={cancelRef}
                onClick={() => setUpdateOpen(false)}
              >
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <ProductAdminUi
        setUpdateOpen={setUpdateOpen}
        setDeleteOpen={setDeleteOpen}
        id={id}
        image1={image1}
        category={category}
        name={name}
        cost={cost}
      />
    </>
  );
};

export default AdminSingleProduct;
