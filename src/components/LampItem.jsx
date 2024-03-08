import { useContext, useState } from "react"
import "../styles/style.css"
import { GlobalContext } from "../GlobalContext.jsx"

export default function LampItem(props){
  const { id, name, description, cost, image, keywords} = props.lamp
  const { basket, setBasket } = useContext(GlobalContext)
  const { setDisplayBasket } = useContext(GlobalContext)

  return <>
    <li className="product" key={id}>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{cost}</p>
      <img src={image} />
      <ul>
        {keywords.map((keyword, index) => <li key={index}>{keyword}</li>)}
      </ul>
      <button onClick={() => {
        setBasket([...basket, props.lamp])
        setDisplayBasket(true)
      }}>
      Add to basket</button>
    </li> 
  </>
}