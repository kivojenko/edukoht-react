import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function SimilarRecipes(props) {
    const similarRecipes = [{"id":153006,"imageType":"jpg","title":"Zuppa di Cavolo Nero, Cannellini, e Salsicce: Kale, White Bean, and Sausage Soup","readyInMinutes":45,"servings":12,"sourceUrl":"http://www.epicurious.com/recipes/food/views/Zuppa-di-Cavolo-Nero-Cannellini-e-Salsicce-Kale-White-Bean-and-Sausage-Soup-363386"},{"id":209899,"imageType":"jpg","title":"Celeriac, cavolo nero & bacon mash","readyInMinutes":40,"servings":6,"sourceUrl":"https://www.bbcgoodfood.com/recipes/2667646/celeriac-cavolo-nero-and-bacon-mash"},{"id":1092998,"imageType":"jpg","title":"Celeriac & cavolo nero colcannon with thyme & bacon crumb","readyInMinutes":35,"servings":4,"sourceUrl":"https://www.bbcgoodfood.com/recipes/celeriac-cavolo-nero-colcannon-thyme-bacon-crumb"}]

        // const [similarRecipes, setSimilarRecipes] = useState([]);

        // useEffect(() => {
        //     axios.get("https://api.spoonacular.com/recipes/" + props.id + "/similar?apiKey=a768f177d0a44a14b9c4b7c61a8fbafa&number=3")
        //     .then((res) => setSimilarRecipes(res.data));
        // }, [])

    const navigator = useNavigate();

    function selectRecipe(id) {
        window.scrollTo(0,0);
        navigator("/recipe?id=" + id);
    }

    const similarRecipesObject = similarRecipes.map(recipe => 
        <div key={recipe.id} className="recipe"  onClick={() => selectRecipe(recipe.id)}>
            {recipe.title}
        </div>
    )

    return (
    <>
    <h3>Other recipes you might like:</h3>
    <div id="similarRecipes">
        {similarRecipesObject}
    </div>
    </>
    )
}