import { Center, Grid, GridItem, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import "../Homepage.css"

const Collection = () => {
  return (
    <div className='collection-component'>
        <div>
        <Text className='collection_heading'   fontSize={{ base: '8px', md: '10px', lg: '20px' }} >STUDIO COLLECTIONS</Text> 
        <Center w="100vw">
          <Grid className="collection_grid" >
          <GridItem >
            <Image w={[200,300, 350]} src='https://images.dailyobjects.com/marche/assets/images/other/dremscape-banner-mob-02.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1' />
            <Text className="card-text" fontSize={{ base: '8px', md: '10px', lg: '16px' }}>DREAMSCAPE</Text>
            <Text className="card-text" fontSize={{ base: '5px', md: '10px', lg: '15px' }}>A vivid dream journal that lets you carry your daydreaming stance into real life.</Text>
            <Link color={"black"} fontSize={{ base: '8px', md: '10px', lg: '16px' }}>Shop Now</Link>
          </GridItem>

          <GridItem >
            <Image w={[200,300, 350]} src='https://images.dailyobjects.com/marche/assets/images/other/zodiac-collections.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1' />
            <Text className="card-text" fontSize={{ base: '8px', md: '10px', lg: '16px' }}>ZODIAC</Text>
            <Text className="card-text" fontSize={{ base: '5px', md: '10px', lg: '15px' }}>Zodiac Collection reflects the unique personality of every individual</Text>
            <Link color={"black"}fontSize={{ base: '8px', md: '10px', lg: '16px' }}>Shop Now</Link>
          </GridItem>

          <GridItem >
            <Image w={[200,300, 350]} src='https://images.dailyobjects.com/marche/assets/images/other/pixel-banner-4-02.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1' />
            <Text className="card-text" fontSize={{ base: '8px', md: '10px', lg: '16px' }}>PIXEL</Text>
            <Text className="card-text" fontSize={{ base: '5px', md: '10px', lg: '15px' }}>A reflection of modern pop-culture, this collection has a vintage appeal that evokes nostalgia.</Text>
            <Link color={"black"}fontSize={{ base: '8px', md: '10px', lg: '16px' }}>Shop Now</Link>
          </GridItem>
         
          </Grid>
        </Center>
      </div>
    </div>
  )
}

export default Collection
