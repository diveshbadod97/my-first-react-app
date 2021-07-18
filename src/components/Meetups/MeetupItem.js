import classes from './MeetupItem.module.css'
import Card from '../UI/Card';
import { useContext } from 'react';
import favouriteContext from '../../store/favourite-context';

function MeetupItem(props){
    const favCntxt = useContext(favouriteContext);
    const itemIsfav = favCntxt.itemIsFavourite(props.id);

    function toggleFavouriteMeetupsHandler(){
        if(itemIsfav){
            favCntxt.removeFavourite(props.id)
        }
        else{
            favCntxt.addFavourite({
                id: props.id,
                title: props.title,
                description: props.description,
                address: props.address,
                image: props.image
            });
        }
    }
    return(
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavouriteMeetupsHandler}>{itemIsfav ? 'Remove from Favourites': 'Add to Favourites'}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;