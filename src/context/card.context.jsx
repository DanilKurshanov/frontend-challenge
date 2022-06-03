import {createContext, useState} from "react";


export const CardContext = createContext({
    Items: [],
    addItemToFavorite: () => {},
    deleteItemFromFavorite: () => {},
});

function addCard(Items, cardToAdd) {
    cardToAdd = JSON.parse(cardToAdd)

    const existingCardItem = Items.find((cardItem) => cardItem.id === cardToAdd.id);
    console.log('addCard-existing', existingCardItem)
    if (existingCardItem) {
        return [...deleteCard(Items, cardToAdd)]
    }

    return [...Items, {...cardToAdd}];
}

function deleteCard(Items, ItemToRemove) {
    const newArrItems = Items.filter((cardItem) => cardItem.id !== ItemToRemove.id)
    console.log('deleteCard', newArrItems)
    localStorage.removeItem(ItemToRemove.id)
    return newArrItems;
}

export const CardProvider = ({children}) => {

    const localStorageImages = Object.values({...localStorage}).map((item) => JSON.parse(item));
    const [Items, setItems] = useState(localStorageImages);


    const addItemToFavorite = (cardToAdd) => {
        setItems(addCard(Items, cardToAdd));
    };

    // const deleteItemFromFavorite = (cartItemToRemove) => {
    //     setItems(deleteCard(Items, cartItemToRemove));
    // };

    const value = {Items, addItemToFavorite};

    return (
        <CardContext.Provider value={value}>{children}</CardContext.Provider>
    );
}