import React, { useState } from 'react';
import "../Homepage.css"
import {
  Box,
  IconButton,
  useBreakpointValue,
  Text,
  GridItem,
  Grid,
  Image,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 5000,
  
};



export default function ProductCategory() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '50%', md: '52%', sm: "30%"}) 
  const side = useBreakpointValue({ base: '0%', md: '3%', sm:"3%"}) 

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Cases',
      title2: 'Bags',
      title3: 'Laptop sleves',
      title4: 'Tote Bags',
      image:'https://images.dailyobjects.com/marche/assets/images/other/cases-ups.jpg?tr=cm-pad_crop,v-2,w-875,dpr-1',
      image2:'https://images.dailyobjects.com/marche/assets/images/other/backpack-ups.jpg?tr=cm-pad_crop,v-2,w-875,dpr-1',
      image3:'https://images.dailyobjects.com/marche/assets/images/other/laptop-sleeve-ups.jpg?tr=cm-pad_crop,v-2,w-875,dpr-1',
      image4:'https://images.dailyobjects.com/marche/assets/images/other/tote-ups.jpg?tr=cm-pad_crop,v-2,w-875,dpr-1',
    },
    {
      title: 'Crosbody bag',
      title2: 'Bagpack',
      title3: 'Desk Mat',
      title4: 'Watch Band',
      image:'https://images.dailyobjects.com/marche/assets/images/other/crossbody-ups.jpg?tr=cm-pad_crop,v-2,w-875,dpr-1',
      image2:'https://images.dailyobjects.com/marche/assets/images/other/backpack-ups.jpg?tr=cm-pad_crop,v-2,w-875,dpr-1',
      image3:'https://images.dailyobjects.com/marche/assets/images/other/deskmat-ups.jpg?tr=cm-pad_crop,v-2,w-875,dpr-1',
      image4:'https://images.dailyobjects.com/marche/assets/images/other/watchbands-ups.jpg?tr=cm-pad_crop,v-2,w-875,dpr-1',
    },

  ];

  return (
    <Box padding={"2%"}
      position={'relative'}
      height={'20%'}
      width={'full'}
      backgroundColor="#ffffff"
      overflow={"hidden"}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        color={"grey"}
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        color={"grey"}
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Text className='heading' fontSize={{ base: '8px', md: '10px', lg: '20px' }} >SHOP CATEGORIES</Text>
      <Slider {...settings} ref={(slider) => setSlider(slider)}  >
        
        {cards.map((card, index) => (
          <Grid    width="100%" key={index} >
            <GridItem display={"flex"} justifyContent="space-evenly"  >
              <Box >
                  <Image src={card.image} w={[50,100, 200]}  alt={card.title} onClick={()=>console.log("1")}/>
                  <Text color={"black"} fontSize={{ base: '10px', md: '10px', lg: '15px' }}>{card.title}</Text>
              </Box>
              <Box>
                  <Image src={card.image2} w={[50,100, 200]} alt={card.title} onClick={()=>console.log("1")} />
                  <Text color={"black"} fontSize={{ base: '10px', md: '10px', lg: '15px' }}>{card.title2}</Text>
              </Box>
              <Box>
                 <Image src={card.image3} w={[50,100, 200]} alt={card.title} onClick={()=>console.log("1")}/>
                 <Text color={"black"} fontSize={{ base: '10px', md: '10px', lg: '15px' }}>{card.title3}</Text>
              </Box>
              <Box>
                 <Image src={card.image4} w={[50,100, 200]} alt={card.title} onClick={()=>console.log("1")}/>
                  <Text color={"black"} fontSize={{ base: '10px', md: '10px', lg: '15px' }}>{card.title4}</Text>
              </Box>
            </GridItem>          
          </Grid>
          
        ))}
      </Slider>
    </Box>
  );
}