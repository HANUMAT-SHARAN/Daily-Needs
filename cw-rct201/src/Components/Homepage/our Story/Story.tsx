import { Box, Center, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "../Homepage.css"

const Story = () => {
  return (
    <div>
    <Center w="100vw">
    <Flex justifyContent={"space-evenly"} >
          <Grid className="story_grid" padding={"30px"} >
          <GridItem >
          <h1 style={{fontWeight:"bold",fontSize:"40px",marginTop:"20px"}}>OUR STORY</h1>
            <p style={{color:"#2d232f"}} >Founded in 2012, DailyObjects is a design-obsessed lifestyle accessories brand committed
             to making your everyday carry #lessordinary.</p>
            <p style={{marginTop:"20px",color:"#2d232f"}}>You can look forward to a carefully-crafted range of products,
             made from long-lasting materials, with designs that stand out and make your life easy.
             With DailyObjects, 
             let your lifestyle reflect your sensibilities as you go on to make your every day #lessordinary.</p>
          </GridItem>

          <GridItem className='border_img'>
          <Image  src='https://images.dailyobjects.com/marche/assets/images/other/Our-Story-updated01.jpg?tr=cm-pad_crop,v-2,w-790,dpr-1' />
          </GridItem>
          </Grid>
          </Flex>
        </Center>
    </div>
 
   
  )
}

export default Story
