import { useContext } from "react";
import favouriteContext from "../store/favourite-context";
import MeetupList from "../components/Meetups/MeetupList";
function FavouritesPage(){
    const favCntxt = useContext(favouriteContext);
    let content;
    if(favCntxt.totalFavourites === 0){
        content = <p>Don't Have Any Favourites</p>
    }
    else{
        content = <MeetupList meetups={favCntxt.favourites}></MeetupList>
    }
    return(
        <section>
            <h1>My Favourites</h1>
            {content}
        </section>
    );
}

export default FavouritesPage;