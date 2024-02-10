import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { useNavigate } from "react-router-dom";

export function itemTemplate(product) {

    const navigator = useNavigate();

    return (
    <>
        <div className="productItem" onClick={() => navigator("/recipe?id=" + product.id)}>  
            <img src={product.image} alt={product.title} />
            <Rating
                value={Math.round(product.spoonacularScore / 10)} 
                readOnly 
                cancel={false}/>
            <Tag
                severity={product.vegetarian ? 'success' : 'warning'}
                value={product.vegetarian ? "Vegeterian" : "Non-vegerian"}
            />
            <p>{product.title}</p>
        </div>
    </>
    );
}