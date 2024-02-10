import {DataView} from 'primereact/dataview'
import { Paginator } from 'primereact/paginator';
import 'primeflex/primeflex.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {products} from '../assets/products'
import { itemTemplate } from '../components/ItemTemplate';

export function Home() {

    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     axios.get("https://api.spoonacular.com/recipes/random?number=20&apiKey=a768f177d0a44a14b9c4b7c61a8fbafa")
    //     .then((res) => setProducts(res.data));
    // }, [])]

    const [current, setCurrent] = useState(products.recipes.slice(0, 6));
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(6);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);

        setCurrent(products.recipes.slice(event.first, event.first + event.rows));
    };

    return (
    <>
        <DataView value={current} itemTemplate={itemTemplate} layout='grid'/>
        <Paginator 
            first={first} 
            rows={rows} 
            totalRecords={products.recipes.length} 
            rowsPerPageOptions={[6, 10, 20]} 
            onPageChange={onPageChange} />
    </>
    )
}