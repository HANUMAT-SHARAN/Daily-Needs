import { Image, Text } from '@chakra-ui/react'
import React from 'react'
import ProductCategory from './category/CoroselCategory'
import "./Homepage.css"
import NewArrival from './New Arrival/NewArrival'
import Collection from './studiocollection/Collection'
const Homepage = () => {
  return (
    <div>
        <div>
            <img className='front-flex-img' src="https://images.dailyobjects.com/marche/assets/images/other/republicsale-home-page-desktop.png?tr=cm-pad_resize,v-2,w-1351,dpr-1" alt="" />
        </div>
        <div>
            <img className='front-flex-img' src="https://images.dailyobjects.com/marche/assets/images/other/backpack-desktops.jpg?tr=cm-pad_crop,v-2,w-1351,dpr-1" alt="" />
        </div>
     <ProductCategory/>
     <div>
       <Image className='front-flex-img'   src="https://images.dailyobjects.com/marche/assets/images/other/watchbands-desktops.jpg?tr=cm-pad_crop,v-2,w-1351,dpr-1" alt="" />
     </div>
     <div>
      <Collection/>
     </div>
     <div>
      <Image className='front-flex-img'  src='https://images.dailyobjects.com/marche/assets/images/other/messenger-bags-desktops.jpg?tr=cm-pad_crop,v-2,w-1351,dpr-1' />
     </div>
     <div>
      <NewArrival/>
     </div>
    </div>
  )
}

export default Homepage
