import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css'
import { useContext } from 'react';
import favouriteContext from '../../store/favourite-context';

function MainNavigation(){
    const favCntxt = useContext(favouriteContext);
    return(
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to="/favourites">
                            Favourites
                            <span className={classes.badge}>{favCntxt.totalFavourites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;