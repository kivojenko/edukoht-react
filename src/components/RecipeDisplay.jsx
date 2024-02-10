import {DataView} from 'primereact/dataview'
import { Paginator } from 'primereact/paginator';
import { itemTemplate } from '../components/ItemTemplate';
import 'primeflex/primeflex.css';
import { useEffect, useState } from 'react';


export function RecipeDisplay(props) {
    const recipes = props.recipes;
    const paginatorOptions = [12, 24, 36];

    const [current, setCurrent] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
    useEffect(() => {recipes?.length > 2 && setCurrent(recipes?.slice(0, paginatorOptions.at(0)))}, [recipes])
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState( paginatorOptions.at(0));

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);

        setCurrent(recipes?.slice(event.first, event.first + event.rows));
    }

    return (
    <>
        <DataView value={current} itemTemplate={itemTemplate} layout='grid'/>
        <Paginator 
            first={first} 
            rows={rows} 
            totalRecords={recipes?.length ?? 0} 
            rowsPerPageOptions={paginatorOptions} 
            onPageChange={onPageChange} />
    </>
    )
}