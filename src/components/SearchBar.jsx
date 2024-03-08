import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

export default function SearchBar(){
  const { searchQuery, setSearchQuery } = useContext(GlobalContext)

  const inputValue = (event) => {

    setSearchQuery(event.target.value)

  }

  return <>
    <input className="search" type="search" onChange={inputValue} placeholder="Sök efter en lampa"></input>
  </>

}