import { Avatar } from "primereact/avatar";
import { Card } from "primereact/card";
import { Panel } from "primereact/panel";
import { Timeline } from "primereact/timeline";

export function AboutUs() {

    const events = [
        { status: 'Планирование', date: '15/10/2023 10:30', text: "Идея, дизайн, планирование функций."},
        { status: 'Разработка', date: '15/12/2023 14:00', text: "База данных, создание API, интеграция фронтэнда"},
        { status: 'Тестирование', date: '15/02/2024 16:15', text: "ОБратная связь от пользователей, улучшение сайта"}
    ];

    const customizedContent = (item) => {
        return (
            <Card 
                title={item.status} 
                subTitle={item.date}>
                    <p>{item.text}</p>
            </Card>
        );
    };

    const headerTemplate = () => {
        return (
            <div>
                <div className="flex align-items-center gap-2">
                    <Avatar image="https://sun1-21.userapi.com/s/v1/ig2/MGmAc-VzKhAZ7pjiKC4YUTzbQg9ALV9-u6uFla9b5fcl-B7g2jqF2U1UbxN2Eg1Qzo2YmAHOXlOlK74yBoh7J6NI.jpg?size=400x400&quality=95&crop=714,184,824,824&ava=1" 
                        size="large" 
                        shape="circle" />
                    <span className="font-bold">Ксюша Кивоенко</span>
                </div>
            </div>
        );
    };

    const footerTemplate = () => {
        return (
            <span className="p-text-secondary">kivojenko@gmail.com</span>
        );
    };

    return (
        <>
        <div className="card flex flex-wrap gap-6">
            <Timeline 
                value={events} 
                align="alternate"
                content={customizedContent}  
                className="w-full md:w-20rem" />
        </div>
        <div style={{display: "flex", justifyContent:"center"}}>
            <Panel 
                style={{flexGrow: 0.6}}
                headerTemplate={headerTemplate} 
                footerTemplate={footerTemplate} 
                toggleable>
                    <p className="m-0">
                        Ксюша большая молодец и сделала этот сайт!
                    </p>
            </Panel>
        </div>

        </>
    )
}