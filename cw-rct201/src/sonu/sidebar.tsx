import { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Checkbox,
  Stack,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

interface LinkItemProps {
  name: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Apple" },
  { name: "samsung" },
  { name: "OnePlus" },
  { name: "Oppo" },
  { name: "Motorola" },
  { name: "Google" },
];

interface FilterItemProps {
  name: string;
}
const FilterItems: Array<FilterItemProps> = [
  { name: "High-Low" },
  { name: "Low-High" },
];

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="90vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          color={"green"}
          fontSize="xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Category
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <Stack paddingLeft={"40px"}>
          <Checkbox key={link.name}>{link.name}</Checkbox>
        </Stack>
      ))}
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          color={"green"}
          fontSize="xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Filter By Price
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {FilterItems.map((link) => (
        <Stack paddingLeft={"40px"}>
          <Checkbox key={link.name}>{link.name}</Checkbox>
        </Stack>
      ))}
    </Box>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Daily Object
      </Text>
    </Flex>
  );
};
