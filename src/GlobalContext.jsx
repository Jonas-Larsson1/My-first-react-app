import { createContext, useState } from "react";

const GlobalContext = createContext()

const GlobalProvider = ({children}) => {

  const lamps = [
    {
      "name": "Vit taklampa",
      "id": 14,
      "description": "Mått Ø 25 cm, höjd 20 cm.",
      "cost": 2500,
      "image": "https://calixter.se/bilder/artiklar/T096501.jpg?m=1617041153",
      "keywords": ["stor","20-tal"]
    },
    {
      "name": "Bordslampa i guld",
      "id": 9,
      "description": "Mått Ø 55 cm, höjd 30 cm.",
      "cost": 6900,
      "image": "https://www.vaxjoelektriska.se/bilder/artiklar/zoom/OLU-L0233D-OR_1.jpg?m=1525849508",
      "keywords": ["läslampa","80-tal"]
    },
    {
      "name": "Vit golvlampa",
      "id": 21,
      "description": "Mått Ø 15 cm, höjd 200 cm.",
      "cost": 1780,
      "image": "https://d2lhb5rbruih0q.cloudfront.net/eyJ2IjoxMTMsInQiOiJwcm9kdWN0IiwibiI6IjEwNTQ2Ni5qcGcifQ==/5778.jpg?q=85&w=670&h=447&dpr=2",
      "keywords": ["vit", "golv"]
    }
  ]

  const [searchQuery, setSearchQuery] = useState('')

  const [basket, setBasket] = useState([])

  const [displayBasket, setDisplayBasket] = useState(false)

  return <GlobalContext.Provider
    value={{
      lamps,
      searchQuery,
      setSearchQuery,
      basket,
      setBasket,
      displayBasket,
      setDisplayBasket
    }}>
    {children}
  </GlobalContext.Provider>

}

export {GlobalContext, GlobalProvider}