import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { Data } from "../../Pages/MobileProducts";
import { useDispatch } from "react-redux";
import { sendDataToRedux, updateTodoFromDom } from "../../Redux/admin/adminAction";
import { Dispatch } from "redux";
import { store } from "../../Redux/store";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { toast } from "react-toastify";

const AdminSingleProduct = ({ image1, id, name, cost, category }: Data) => {
  const dispatch: any = useDispatch();

  const [nameDrawerOpen, setNameDrawerOpen] = React.useState<boolean>(false);
  const [priceDrawerOpen, setPriceDrawerOpen] = React.useState<boolean>(false);
  const [updateOpen, setUpdateOpen] = React.useState<boolean>(false);
  const [alertDeleteOpen, setDeleteOpen] = React.useState<boolean>(false);
  const [newName, setnewName] = React.useState<string>("");
  const [newCat, setNewCat] = React.useState<string>("");
  const [newPrice, setNewPrice] = React.useState<any>();
  const [categoryDrawerOpen, setCategoryDrawerOpen] = React.useState<boolean>(false);

  const [newImage, setNewImage] = React.useState<string>("");
  const [image1DrawerOpen, setImage1DrawerOpen] = React.useState<boolean>(false);

  const cancelRef = React.useRef<any>();
  const nameSuccess=()=>{
    toast.success(" Name Updated Successfully",{theme:"colored"})
}
const categorySuccess=()=>{
  toast.success(" Category Updated Successfully",{theme:"colored"})
}
const priceSuccess=()=>{
  toast.success("Price Updated Successfully",{theme:"colored"})
}
const deleteSuccess=()=>{
  toast.error("Product Deleted Successfully",{theme:"colored"})
}
const imageUpdate=()=>{
  toast.success("Image Updated Successfully",{theme:"colored"})
}
  const updateName = (id: number) => {
    let obj = {
      name: newName,
    };

    axios.patch(`http://localhost:4040/products/${id}`, obj);

    setUpdateOpen(false);
    setNameDrawerOpen(false);
    setTimeout(()=>{
      // dispatch(sendDataToRedux());
    },1500)
    
   
    nameSuccess()
  };
  const updatePrice = (id: number) => {
    let obj = {
      cost: +newPrice,
    };
    axios.patch(`http://localhost:4040/products/${id}`, obj);

   
    setPriceDrawerOpen(false);
    setUpdateOpen(false);
    setTimeout(()=>{
      // dispatch(sendDataToRedux());
      priceSuccess()
    },1500)
   
    
  };
  const deleteproduct=(id:number)=>{
    axios.delete(`http://localhost:4040/products/${id}`);
    setDeleteOpen(false)
    setUpdateOpen(false);
    setTimeout(()=>{
      // dispatch(sendDataToRedux());
      deleteSuccess()
    },1500)
    
      
  }
  const updateCategory=(id:number)=>{
    let obj={
      id,
      category:newCat
    }
    axios.patch(`http://localhost:4040/products/${id}`,obj)
    setCategoryDrawerOpen(false)
    setUpdateOpen(false);
    setTimeout(()=>{
      // dispatch(sendDataToRedux());
      // dispatch(updateTodoFromDom(obj))
      categorySuccess()
    },1500)
   
  
  }

  const updateImage=(id:number)=>{
    let obj={
      image1:newImage
    }
    axios.patch(`http://localhost:4040/products/${id}`,obj)
    setImage1DrawerOpen(false)
    setUpdateOpen(false);
    setTimeout(()=>{
      // dispatch(sendDataToRedux());

      imageUpdate()
    },1500)
  }
  return (
    <Box
      p={"10px 0px 10px 0px"}
      borderRadius={"1rem"}
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
      textAlign={"center"}
    >
      <Box
        margin={"auto"}
        width={"40%"}
        backgroundColor={"white"}
        backdropFilter={"blur(20px)"}
        borderRadius={"2rem"}
      >
        <Avatar size={"xl"} src={image1} />
      </Box>
      <Text mt={1} fontWeight={"bold"} fontSize={"16px"}>
        {" "}
        Name : {name}
      </Text>
      <Text mt={1} fontWeight={"bold"} fontSize={"16px"}>
        {" "}
        Category : {category}
      </Text>
      <Text mt={1} fontWeight={"bold"} fontSize={"16px"}>
        Product Id : {id}
      </Text>
      <Text mt={1} fontWeight={"bold"} fontSize={"16px"}>
        Price : ₹ {cost}
      </Text>
      <Flex mt={3} margin={"auto"} w={"60%"} justifyContent={"space-evenly"}>
        <Button colorScheme="blue" onClick={() => setUpdateOpen(true)}>
          <EditIcon />
        </Button>
        <Button onClick={()=>setDeleteOpen(true)} colorScheme="blue">
          <DeleteIcon />
        </Button>
      </Flex>
      <>
   
{/* This Is The Delete Part oF the admin Product */}
      <AlertDialog
        isOpen={alertDeleteOpen}
        leastDestructiveRef={cancelRef}
        onClose={()=>setDeleteOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Product
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={()=>setDeleteOpen(false)}>
                Cancel
              </Button>
              <Button  colorScheme='red' onClick={()=>deleteproduct(id)} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      {/* This is wehre we give users an option to do update name,price,category */}
        <AlertDialog
        
      
          isOpen={updateOpen}
          leastDestructiveRef={cancelRef}
          onClose={() => setUpdateOpen(false)}
        >
          <AlertDialogOverlay>
            <AlertDialogContent  >
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Update {name} Product Details
              </AlertDialogHeader>

              <AlertDialogBody >
                <Flex  justifyContent={"space-between"}>
                   <SimpleGrid alignItems={"center"}  margin="auto" textAlign="center" >
                <Button
                
                width={"100%"}
                mb={1}
                  colorScheme="teal"
                  onClick={() => setNameDrawerOpen(true)}
                >
                  Update Name
                </Button>
                <br />
                <Button
                width={"100%"}
                 mb={1}
                  colorScheme="teal"
                  onClick={() => setCategoryDrawerOpen(true)}
                >
                  Update Category
                </Button>

                <br />
                <Button
                width={"100%"}
                 mb={1}
                  colorScheme="teal"
                  onClick={() => setPriceDrawerOpen(true)}
                >
                  Update Price
                </Button>
                <Button
                width={"100%"}
                 mt={7}
                  colorScheme="teal"
                  onClick={() => setImage1DrawerOpen(true)}
                >
                  Update Image
                </Button>
               
                </SimpleGrid>
               
                <Box
      p={"10px 10px 10px 10px"}
      borderRadius={"1rem"}
    
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
      textAlign={"center"}
    >
      <Box
        margin={"auto"}
       
      
      
        borderRadius={"2rem"}
      >
        <Avatar size={"xl"} src={image1} />
      </Box>
      <Text mt={1} fontWeight={"bold"} fontSize={"16px"}>
        {" "}
        Name : {name}
      </Text>
      <Text mt={1} fontWeight={"bold"} fontSize={"16px"}>
        {" "}
        Category : {category}
      </Text>
     
      <Text mt={1} fontWeight={"bold"} fontSize={"16px"}>
        Price : ₹ {cost}
      </Text>
      </Box>
                </Flex>
                {/* <SimpleGrid  alignItems={"center"} border="1px solid red" margin="auto" textAlign="center" columns={2}>
                <Button
                mb={5}
                  colorScheme="teal"
                  onClick={() => setNameDrawerOpen(true)}
                >
                  Update Name
                </Button>
                <br />
                <Button
                 mb={5}
                  colorScheme="teal"
                  onClick={() => setCategoryDrawerOpen(true)}
                >
                  Update Category
                </Button>

                <br />
                <Button
                 mb={5}
                  colorScheme="teal"
                  onClick={() => setPriceDrawerOpen(true)}
                >
                  Update Price
                </Button>
                </SimpleGrid> */}
               
                {/* This Drawer is for the Name Updation */}
                <Drawer
                  isOpen={nameDrawerOpen}
                  placement="top"
                  onClose={() => setNameDrawerOpen(false)}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>  Current name : {name} <br /> Enter New Name For the Product </DrawerHeader>

                    <DrawerBody>
                      <Input
                        onChange={(e) => setnewName(e.target.value)}
                        placeholder="Type here..."
                      />
                    </DrawerBody>

                    <DrawerFooter>
                      <Button variant="outline" mr={3} onClick={() => setNameDrawerOpen(false)}>
                        Cancel
                      </Button>
                      <Button
                        onClick={() => updateName(id)}
                        colorScheme="blue"
                      >
                        Save
                      </Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
                {/* This Drawer is For the Price Updateion */}
                <Drawer
                  isOpen={priceDrawerOpen}
                  placement="top"
                  onClose={() => setPriceDrawerOpen(false)}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>  Current price :  ₹ {cost}<br /> Enter New Price For the Product </DrawerHeader>

                    <DrawerBody>
                      <Input
                        type="number"
                        onChange={(e) => setNewPrice(e.target.value)}
                        placeholder="Type here..."
                      />
                    </DrawerBody>

                    <DrawerFooter>
                      <Button variant="outline" mr={3} onClick={()=>setPriceDrawerOpen(false)}>
                        Cancel
                      </Button>
                      <Button
                        onClick={() => updatePrice(id)}
                        colorScheme="blue"
                      >
                        Save
                      </Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
                {/* this Drawer is for the image updation */}
                <Drawer
                  isOpen={image1DrawerOpen}
                  placement="top"
                  onClose={() => setImage1DrawerOpen(false)}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>  Enter New Image Url For the Product </DrawerHeader>

                    <DrawerBody>
                      <Input
                        onChange={(e) => setNewImage(e.target.value)}
                        placeholder="Type here..."
                      />
                    </DrawerBody>

                    <DrawerFooter>
                      <Button variant="outline" mr={3} onClick={() => setImage1DrawerOpen(false)}>
                        Cancel
                      </Button>
                      <Button
                        onClick={() => updateImage(id)}
                        colorScheme="blue"
                      >
                        Save
                      </Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button
                  colorScheme="red"
                  ref={cancelRef}
                  onClick={() => setUpdateOpen(false)}
                >
                  Cancel
                </Button>
                {/* <Button colorScheme="red" onClick={() => setUpdateOpen(false)} ml={3}>
                  Delete
                </Button> */}

                {/* Here is the categoruyl updation concept */}
                 <Drawer
                 
        isOpen={categoryDrawerOpen}
        placement='top'
        onClose={()=>setCategoryDrawerOpen(false)}
  
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>  Current category :  {category} <br /> Enter New Category For the Product </DrawerHeader>

          <DrawerBody>
            <Input onChange={(e)=>setNewCat(e.target.value)} placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={()=>setCategoryDrawerOpen(false)}>
              Cancel
            </Button>
            <Button onClick={()=>updateCategory(id)} colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    </Box>
  );
};

export default AdminSingleProduct;
// {/* <Flex boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"} margin={"auto"} w={"80%"}>
//         <Box>
//           <Avatar mt={3} size={"lg"} src={image1}  pos={"relative"} />
//         </Box>

//         <Flex
//           alignItems={"center"}

//           justifyContent={"space-between"}
//         >
//           <Box w={180}>
//             <Heading p={4} ml={2} fontWeight={600} fontSize={"16"}>
//               Name:{name}
//             </Heading>
//           </Box>
//           <Box w={200}>
//             <Heading p={4} ml={2} fontWeight={600} fontSize={"16"}>
//               ID:{id}
//             </Heading>
//           </Box>
//           <Box w={200}>
//             <Heading p={4} ml={2} fontWeight={600} fontSize={"16"}>
//               Category:{catogery}
//             </Heading>
//           </Box>
//           <Box w={200}>
//             <Heading p={4} ml={2} fontWeight={600} fontSize={"16"}>
//               Category:{cost}
//             </Heading>
//           </Box>

//           <Button>Update</Button>
//           <Button>Delete</Button>
//         </Flex>
//       </Flex> */}
