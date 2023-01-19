import { Center, Grid, GridItem, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import "../Homepage.css"

const Collection2 = () => {
  return (
    <div className='collection-component'>
        <div>
        <Text className='collection_heading'   fontSize={{ base: '8px', md: '10px', lg: '20px' }} >COLLECTIONS</Text> 
        <Center w="100vw">
          <Grid className="collection_grid" padding={"30px"} >
          <GridItem >
            <Image w={[200,300, 400]} src='https://images.dailyobjects.com/marche/assets/images/other/collection-08-01.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1' />
            <Text className="card-text" fontSize={{ base: '8px', md: '10px', lg: '16px' }}>08:01 COLLECTION</Text>
            <Text className="card-text" fontSize={{ base: '5px', md: '10px', lg: '15px' }}>Features a range of chroniclers that let you preserve all brief encounters on your journey.</Text>
            <Link color={"black"} fontSize={{ base: '8px', md: '10px', lg: '16px' }}>Shop Now</Link>
          </GridItem>

          <GridItem >
            <Image w={[200,300, 400]} src='https://images.dailyobjects.com/marche/assets/images/other/zootopia-Web.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1' />
            <Text className="card-text" fontSize={{ base: '8px', md: '10px', lg: '16px' }}>DAILYOBJECTS X SMARTSTERS</Text>
            <Text className="card-text" fontSize={{ base: '5px', md: '10px', lg: '15px' }}>A playful and functional range of indoor desk and storage solutions for children.</Text>
            <Link color={"black"}fontSize={{ base: '8px', md: '10px', lg: '16px' }}>Shop Now</Link>
          </GridItem>

          <GridItem >
            <Image w={[200,300, 400]} src='https://images.dailyobjects.com/marche/assets/images/other/collection-tarp.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1' />
            <Text className="card-text" fontSize={{ base: '8px', md: '10px', lg: '16px' }}>TARP COLLECTION</Text>
            <Text className="card-text" fontSize={{ base: '5px', md: '10px', lg: '15px' }}>Urban-inspired carriers, made for free-spirited and powerful wearers.</Text>
            <Link color={"black"}fontSize={{ base: '8px', md: '10px', lg: '16px' }}>Shop Now</Link>
          </GridItem> 
          </Grid>
        </Center>
      </div>
    </div>
  )
}

export default Collection2
