import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";

import MyNav from "./MyNav.jsx";



export default function Router() {
  return <>
    <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
}
