import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'primeicons/primeicons.css';
import { Home } from "./pages/Home"
import { Favorites } from "./pages/Favorites"
import { Layout } from "./pages/Layout"
import './App.css'
import './assets/navbar.css'
import './assets/dataview.css'
import './assets/similarRecipes.css'
import { NotFound } from "./pages/NotFound"
import { Recipe } from "./pages/Recipe";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { atom } from "jotai";
import { AboutUs } from "./pages/AboutUs";


export const favoritesAtom = atom(JSON.parse(localStorage.getItem("favorites") ?? "[]"));

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="about" element={<AboutUs/>} />
          <Route path="recipe" element={<Recipe />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
