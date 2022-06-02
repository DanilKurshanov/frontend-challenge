import {useContext} from "react";
import {CardContext} from "../../context/card.context";
import CardItemComponent from "../../components/card-item/card-item.component";
import './favorite-cats.styles.scss';


const FavoriteCatsComponent = () => {
    const {Items} = useContext(CardContext);

    return (
        <div className={'favorite-container'}>
            {Items.map((cardItem) => {
                return (
                    <CardItemComponent data={cardItem} key={cardItem.id}/>
                );
            })}
        </div>
    );
}

export default FavoriteCatsComponent;