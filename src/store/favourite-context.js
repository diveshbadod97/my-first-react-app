import { createContext, useState } from "react";


const favouriteContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favouriteMeetup) => {},
    removeFavourite: (meetupId) => {},
    itemIsFavourite: (meetupId) => {}
});

export function FavouritesContextProvider(props){
    const [userFavourites, setUserFavourites] = useState([]);

    function addFavouriteHandler(favouriteMeetup){
        setUserFavourites((prevUserFavourite)=>{
            return prevUserFavourite.concat(favouriteMeetup);
        });
    }
    function removeFavouriteHandler(meetupId){
        setUserFavourites((prevUserFavourite)=>{
            return prevUserFavourite.filter(meetup => meetup.id !== meetupId);
        })
    }
    function itemIsFavouriteHandler(meetupId){
        return userFavourites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler
    };

    return (
    <favouriteContext.Provider value={context}>
        {props.children}
    </favouriteContext.Provider>
    )
}


export default favouriteContext;