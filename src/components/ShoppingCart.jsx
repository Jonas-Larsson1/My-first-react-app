import { useContext } from "react"
import { GlobalContext } from "../GlobalContext.jsx"
import "../styles/style.css"

export default function ShoppingCart(){

  const { basket } = useContext(GlobalContext)
  const {displayBasket, setDisplayBasket} = useContext(GlobalContext)

  
  // window.onclick = function CheckWindowClick(event){
    // setDisplayBasket(false)
    // (displayBasket && event === click) ?    
    // }
  
  // let oldBasketLength = 0
  // let newBasketLength = basket.length
  // if (newBasketLength > oldBasketLength) {
  //   setDisplayBasket(true)
  //   oldBasketLength = newBasketLength
  // } 

  return <> 
    {(displayBasket) ?
    <div>
      <ul className="basket">
      <button onClick={() => setDisplayBasket(false)}>Close basket</button> 
        {basket.map((basketItem, index) => <li key={index}>{basketItem.name}</li>)}
      </ul>
    </div> 
    : null}

  </>
}