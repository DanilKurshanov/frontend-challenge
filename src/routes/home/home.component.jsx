import {useEffect, useState} from "react";

import CardItemComponent from "../../components/card-item/card-item.component";

import './home.styles.scss';


const HomeComponent = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search?limit=15', {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "1889f305-d558-4d40-a8a5-1264d65beb88"
            }})
            .then(response => response.json())
            .then((data) => {
                setItems(data.map(e => ({ id: e.id, url: e.url })))
                setIsLoaded(true)
            })
    }, [])

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div className={'main-container'}>
                {items.map(item => (<CardItemComponent data={item} />))}
            </div>
        );
    }
}

export default HomeComponent;