import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { SimilarRecipes } from "../components/SimilarRecipes";
import { AnalyzedInstructions } from "../components/AnalyzedInstructions";
import { products } from "../assets/products";
import { ExtendedIngredients } from "../components/ExtendedIngredients";
import { RecipeTime } from "../components/RecipeTime";

export function Recipe() {

    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    const recipe = products.recipes[0]

//    const [recipe, setRecipe] = useState({});

//     useEffect(() => {
//         axios.get("https://api.spoonacular.com/recipes/" + id + "/information?apiKey=a768f177d0a44a14b9c4b7c61a8fbafa")
//         .then((res) => setRecipe(res.data));
//     }, [id])

    return recipe ? (
    <>
    <h1>{recipe.title}</h1>
    <RecipeTime recipe={recipe}/>
    <ExtendedIngredients extendedIngredients={recipe.extendedIngredients}/>
    <img src={recipe.image} alt=""/>
    <hr />
    <AnalyzedInstructions analyzedInstructions={recipe.analyzedInstructions}/>
    <SimilarRecipes id={id}/>
    </>
    ) : <></>;
}