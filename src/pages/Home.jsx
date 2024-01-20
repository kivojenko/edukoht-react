import {DataView} from 'primereact/dataview'
import { Tag } from 'primereact/tag';
import { Rating } from 'primereact/rating';
import { Paginator } from 'primereact/paginator';
import 'primeflex/primeflex.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {products} from '../assets/products'
import { useNavigate } from 'react-router-dom';

export function Home() {

    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     axios.get("https://api.spoonacular.com/recipes/random?number=20&apiKey=a768f177d0a44a14b9c4b7c61a8fbafa")
    //     .then((res) => setProducts(res.data));
    // }, [])]

    const navigator = useNavigate();

    const [current, setCurrent] = useState(products.recipes.slice(0, 6));
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(6);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);

        setCurrent(products.recipes.slice(event.first, event.first + event.rows));
    };

    const itemTemplate = (product) => (
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
    );


    return (
    <>
        <DataView value={current} itemTemplate={itemTemplate} />
        <Paginator 
            first={first} 
            rows={rows} 
            totalRecords={products.recipes.length} 
            rowsPerPageOptions={[6, 10, 20]} 
            onPageChange={onPageChange} />
    </>
    )
}