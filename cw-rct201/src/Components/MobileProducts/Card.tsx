import React from 'react'
import "./Card.css"

export type CardProps={
    id:number,
    image1:string
    image2?:string
    image3?:string
    image4?:string
    description:string
    category:string
    Rating:number
    cost:number
   
}


const Card:React.FC<CardProps>= ({image1,description,category,cost,Rating,id}) => {
  return (
    <>
        <div className='main'  key={id}>
       <img src={image1} alt="" />
          <p>{description}</p>
          <p>{category}</p>
          <p>{Rating}</p>
          <h1>{cost}</h1>

       </div>
       </>
  )

  }
export default Card
