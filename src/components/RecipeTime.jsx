import { DataView } from "primereact/dataview"

export function RecipeTime(props) {
    const products = [
        {key: "Preparation time", value: props.recipe.preparationMinutes + " mins"},
        {key: "Cooking time", value: props.recipe.cookingMinutes + " mins"},
        {key: "Total time", value: props.recipe.readyInMinutes + " mins"}
    ];

    const itemTemplate = (product) => (
        <div className="productItem">
            <p>{product.key}</p>
            <p>{product.value}</p>
        </div>
    )

    return (
        <>
        <DataView 
        value={products}
        itemTemplate={itemTemplate}
        layout='grid'
        />
        </>
    );
}