import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {products} from '../assets/products'
import { RecipeDisplay } from '../components/RecipeDisplay';


export function Home() {

    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     axios.get("https://api.spoonacular.com/recipes/random?number=36&apiKey=a768f177d0a44a14b9c4b7c61a8fbafa")
    //     .then((res) => setProducts(res.data));
    // }, [])

    return (
    <>
    <RecipeDisplay recipes={products.recipes}/>
    </>
    )
}