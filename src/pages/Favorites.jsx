import { useAtomValue } from "jotai"
import { RecipeDisplay } from '../components/RecipeDisplay';
import { favoritesAtom } from "../App"

export function Favorites() {

    const recipes = useAtomValue(favoritesAtom);


    return (
    <>
        <h1>This is Favorites!</h1>
        <RecipeDisplay recipes={recipes}/>
    </>
)
}