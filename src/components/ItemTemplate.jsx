import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { ToggleButton } from "primereact/togglebutton";
import { useNavigate } from "react-router-dom";
import { favoritesAtom } from "../App";
import { useAtom } from "jotai";
import { Skeleton } from "primereact/skeleton";

export function itemTemplate(product) {

    const navigator = useNavigate();

    const [favorites, setFavorites] = useAtom(favoritesAtom);
    const checked = product.id ? favorites.some(p => p.id == product.id) : false;

    function toggleFavorite(product) {
        let result = favorites;
        if (favorites.some(p => p.id == product.id)) {
            result = favorites.filter(f => f.id != product.id);
        } else {
            result = [...favorites, product];
        }
        setFavorites(result);
        localStorage.setItem("favorites", JSON.stringify(result))
    }

    return (
    <>
        <div className="productItem" onClick={() => navigator("/recipe?id=" + product.id)}>  
            {   
                product.image
                    ? <img src={product.image} alt={product.title} />
                    : <Skeleton height="8.6rem" borderRadius="1rem" />}
            {
                product.spoonacularScore 
                    ? <Rating
                        value={Math.round(product.spoonacularScore / 10)} 
                        readOnly 
                        cancel={false}/>
                    : <Skeleton className="rating-skeletom" height="1rem" borderRadius="1rem" />
            }
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {
                    product.vegetarian !== undefined
                        ? <Tag
                            severity={product.vegetarian ? 'success' : 'warning'}
                            value={product.vegetarian ? "Vegeterian" : "Non-vegerian"}
                        />
                        : <Skeleton height="2rem"  width="6rem"/>
                }
                <ToggleButton
                    onClick={(e) => {  e.stopPropagation(); toggleFavorite(product)}}
                    onLabel=""
                    offLabel=""
                    onIcon="pi pi-heart-fill" 
                    offIcon="pi pi-heart" 
                    checked={checked}
                />
            </div>
            {
                product.title 
                    ? <p>{product.title}</p>
                    : <Skeleton className="rating-skeletom" height="2rem"/>
            }
        </div>
    </>
    );
}