import { useContext } from "react";
import { GlobalContext } from "../GlobalContext.jsx";
import LampItem from "./LampItem.jsx";
import SearchBar from "./SearchBar.jsx";
import "../styles/style.css"

export default function LampFinder() {
  const { lamps } = useContext(GlobalContext)
  const { searchQuery, setSearchQuery } = useContext(GlobalContext)

  return <>
    <ul className="page">
    <SearchBar />
      {lamps.map((lamp, index) => findLamp(lamp, searchQuery) ? <LampItem key={index} lamp={lamp}/> : null )}
    </ul>
  </>
}

const findLamp = (lampObject, searchTerm) => {
  let lampFound = false
  searchTerm = searchTerm.toLowerCase()

  for (let keyword of lampObject.keywords) {
    if (keyword.toLowerCase().search(searchTerm) != -1) {
      lampFound = true
    }
  }

  if (lampObject.name.toLowerCase().search(searchTerm) != -1) {
    lampFound = true
  }
  
  return lampFound
}