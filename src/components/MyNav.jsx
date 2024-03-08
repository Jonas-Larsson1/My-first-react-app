import { Link } from "react-router-dom"

export default function MyNav() {
  return <>
    <nav>
      |&nbsp;
      <Link to={"/"}>Home</Link> |&nbsp;
      <Link to={"/contact"}>Kontakta oss</Link> |&nbsp;
    </nav>
  </>
} 
