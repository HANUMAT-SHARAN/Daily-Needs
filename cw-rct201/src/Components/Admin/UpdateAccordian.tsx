import {
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
  Box,
  Flex,
  AccordionIcon,
  Button,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { AccordianPropsType } from "./AdminProps";

const UpdateAccordian = ({
  id,
  updateName,
  updateCategory,
  updateImage,
  updatePrice,
}: AccordianPropsType) => {
  const [newName, setnewName] = React.useState<string>("");
  const [newCat, setNewCat] = React.useState<string>("");
  const [newPrice, setNewPrice] = React.useState<string>("");
  const [newImage, setNewImage] = React.useState<string>("");
  return (
    <>
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Change Name
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex>
              <Input
                onChange={(e) => setnewName(e.target.value)}
                placeholder="Enter New Name"
              />
              <Button
                onClick={() => updateName(id, newName)}
                colorScheme="green"
                m="auto"
              >
                Submit
              </Button>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Change Category
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex>
              <Input
                onChange={(e) => setNewCat(e.target.value)}
                placeholder="Enter New Category"
              />
              <Button
                onClick={() => updateCategory(id, newCat)}
                colorScheme="green"
                m="auto"
              >
                Submit
              </Button>
            </Flex>
          </AccordionPanel>
        </AccordionItem>{" "}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Change Price
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex>
              <Input
                onChange={(e) => setNewPrice(e.target.value)}
                placeholder="Enter New Price"
              />
              <Button
                onClick={() => updatePrice(id, newPrice)}
                colorScheme="green"
                m="auto"
              >
                Submit
              </Button>
            </Flex>
          </AccordionPanel>
        </AccordionItem>{" "}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Change Image
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex>
              <Input
                onChange={(e) => setNewImage(e.target.value)}
                placeholder="Enter New Image"
              />
              <Button
                onClick={() => updateImage(id, newImage)}
                colorScheme="green"
                m="auto"
              >
                Submit
              </Button>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default UpdateAccordian;
