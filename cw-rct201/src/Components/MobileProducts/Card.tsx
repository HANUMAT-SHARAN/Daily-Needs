import React from 'react'

export type CardProps={
    id:number,
    image1:string
    image2?:string
    image3?:string
    image4?:string
    description:string
    catogery:string
    Rating:number
    cost:number
   
}

const Card:React.FC<CardProps>= ({image1,description,catogery,cost,Rating,id}) => {
  return (
        <div key={id}>
         <img src={image1} alt={catogery}/>
          <p>{description}</p>
          <p>{catogery}</p>
          <p>{Rating}</p>
          <h1>{cost}</h1>
       </div>
  )
}

export default Card




