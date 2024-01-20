import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export function ExtendedIngredients(props) {

    const columns = [
        {field: 'nameClean', header: 'Name'},
        {field: 'amount', header: 'Quantity'},
        {field: 'unit', header: 'Unit'}
    ];

    return (
    <>
    <DataTable 
        value={props.extendedIngredients}
        stripedRows>
        {columns.map((col, i) => (
            <Column 
                key={col.field} 
                field={col.field} 
                header={col.header} />
        ))}
    </DataTable>
    </>
    );
}