import { Outlet } from "react-router-dom";
import { TabMenu } from 'primereact/tabmenu';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";

export function Layout() {

    const mainButtonOnClick = () => {
        alert("Вы успешно подписались на наши уведомления!")
    };
    const mainButton = <Button label="Subscribe" onClick={mainButtonOnClick} />;


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
                <div style={{display: "flex", justifyContent:"space-between", padding: "1rem"}}>
                    <h5>Made by Ksusa with love</h5>
                    <div className="p-inputgroup" style={{width: "auto"}}>
                        <InputText placeholder="Sign up for our newsletter!" />
                        <Button  icon="pi pi-check" label="Sign up!" />
                    </div>
                </div>
            </footer>
        </>
    )
}