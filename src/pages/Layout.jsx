import { Outlet } from "react-router-dom";
import { TabMenu } from 'primereact/tabmenu';
import { Button } from 'primereact/button';

export function Layout() {

    const mainButtonOnClick = () => {
        alert("Вы успешно нажали на кнопку!")
    };
    const mainButton = <Button label="Click me" onClick={mainButtonOnClick} />;


    const items = [
        {template: <img width="50px" src="https://cdn-icons-png.flaticon.com/512/9619/9619775.png " alt="" />},
        {label: 'Home', icon: 'pi pi-fw pi-home', url: '/'},
        {label: 'Favorites', icon: 'pi pi-fw pi-heart', url: '/favorites'},
        {label: 'About', icon: 'pi pi-fw pi-question', url: '/about'},
        {template: mainButton}
    ];

    return (
        <>
            <TabMenu model={items} />
            <div id="main">
                <Outlet/>
            </div>
            <footer>
                <h5>Made by Ksusa with love</h5>
            </footer>
        </>
    )
}