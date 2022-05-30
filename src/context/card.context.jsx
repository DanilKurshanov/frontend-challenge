import {createContext, useState} from "react";


export const CardContext = createContext({
    Items: [],
    activeLike: false,
    addItemToFavorite: () => {},
    deleteItemFromFavorite: () => {},
});

function addCard(Items, cardToAdd) {
    const existingCardItem = Items.find(
        (cardItem) => cardItem.id === cardToAdd.id
    );

    if (existingCardItem) {
        return [...Items]
    }

    return [...Items, {...cardToAdd, activeLike: true}];
}

function deleteCard(Item, ItemToRemove) {
    return Item.filter((e) => e.id !== ItemToRemove.id);
}

export const CardProvider = ({children}) => {

    const [Items, setItems] = useState([]);


    const addItemToFavorite = (cardToAdd) => {
        setItems(addCard(Items, cardToAdd));
    };

    const deleteItemFromFavorite = (cartItemToRemove) => {
        setItems(deleteCard(Items, cartItemToRemove));
    };

    const value = {Items, addItemToFavorite, deleteItemFromFavorite};

    return (
        <CardContext.Provider value={value}>{children}</CardContext.Provider>
    );
}