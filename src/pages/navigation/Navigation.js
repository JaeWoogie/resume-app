import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

//navLink
const Navigation = () => {
    return (    
        // <div className={classes.mainNav}>
        //     <div>Home</div>
        //     <div>Resume</div>
        //     <div>Know me better</div>
        //     <div>Where I'm located</div>
        // </div>
        <nav>
            <ul>
                <li>
                    <NavLink>Home</NavLink>
                </li>
                <li>
                    <NavLink>Resume</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;