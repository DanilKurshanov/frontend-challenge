import './card-item.styles.scss';

const CardItemComponent = ({ data }) => {
    const { id, url } = data;
    return (
        <div className={'item'} key={id}>
            <img src={url} alt="image of cat"/>
            <button>Like</button>
        </div>
    );
}

export default CardItemComponent;