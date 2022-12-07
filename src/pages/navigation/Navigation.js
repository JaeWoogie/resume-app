import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {
    return (    
        <nav class="navbar navbar-dark bg-primary">
            <ul>
                <li>
                    <NavLink activeClassName={classes.active} to='/welcome'>Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to='/resume'>Resume</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to='/know-me-better'>Know me better</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;