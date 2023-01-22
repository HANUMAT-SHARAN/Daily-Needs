import React from "react";
import { Skeleton, SkeletonCircle, SkeletonText, Box } from "@chakra-ui/react";
const Loader = () => {
  return (
    <div>
      <Box padding="1" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
    </div>
  );
};

export default Loader;
