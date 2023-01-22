import { Center, Grid, GridItem, Image, Link, Text,Button} from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getcategory } from '../../../Redux/categorysorting/category.action'
import "../Homepage.css"

const Collection = () => {
  const dispatch:any=useDispatch()
  const navigate=useNavigate()
  const studeocllection1=()=>{
    dispatch(getcategory("cases"))
    navigate("/homeproductpage")
  }
  const studeocllection2=()=>{
    dispatch(getcategory("Apple"))
    navigate("/homeproductpage")
  }
  return (
    <div className='collection-component'>
        <div>
        <Text className='collection_heading'   fontSize={{ base: '8px', md: '10px', lg: '20px' }} >STUDIO COLLECTIONS</Text> 
        <Center w="100vw">
          <Grid className="collection_grid" padding={"30px"} >
          <GridItem className='shrink_img' onClick={()=>studeocllection1()} >
            <Image w={[200,300, 400]} src='https://images.dailyobjects.com/marche/assets/images/other/dremscape-banner-mob-02.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1' />
            <Text className="card-text" fontSize={{ base: '8px', md: '10px', lg: '16px' }}>DREAMSCAPE</Text>
            <Text className="card-text" fontSize={{ base: '5px', md: '10px', lg: '15px' }}>A vivid dream journal that lets you carry your daydreaming stance into real life.</Text>
            <Button color={"black"}fontSize={{ base: '8px', md: '10px', lg: '16px' }} w="95%" >Shop Now</Button>
          </GridItem>

          <GridItem className='shrink_img' onClick={()=>studeocllection2()} >
            <Image w={[200,300, 400]} src='https://images.dailyobjects.com/marche/assets/images/other/zodiac-collections.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1' />
            <Text className="card-text" fontSize={{ base: '8px', md: '10px', lg: '16px' }}>Mac Laptop Collection</Text>
            <Text className="card-text" fontSize={{ base: '5px', md: '10px', lg: '15px' }}>Zodiac Collection reflects the unique personality of every individual</Text>
            <Button color={"black"}fontSize={{ base: '8px', md: '10px', lg: '16px' }} w="95%">Shop Now</Button>
          </GridItem>

          <GridItem className='shrink_img' onClick={()=>studeocllection2()} >
            <Image  w={[200,300, 400]} src='https://images.dailyobjects.com/marche/assets/images/other/pixel-banner-4-02.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1' />
            <Text className="card-text" fontSize={{ base: '8px', md: '10px', lg: '16px' }}>PIXEL</Text>
            <Text className="card-text" fontSize={{ base: '5px', md: '10px', lg: '15px' }}>A reflection of modern pop-culture, this collection has a vintage appeal that evokes nostalgia.</Text>
            <Button color={"black"}fontSize={{ base: '8px', md: '10px', lg: '16px' }} w="95%">Shop Now</Button>
          </GridItem> 
          </Grid>
        </Center>
      </div>
    </div>
  )
}

export default Collection
