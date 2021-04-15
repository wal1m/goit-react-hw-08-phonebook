import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { useSelector } from 'react-redux';
import { getAuthenticated } from '../../redux/auth/auth-selectors';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  NavList: {
    // display: "flex",
    marginBottom: 0,
  },
});

const Navigation = () => {
  const isAuthenticated = useSelector(getAuthenticated);
  const classes = useStyles();
  return (
    <nav>
      <ul className={classes.NavList}>
        <li>
          <NavLink
            exact
            to={routes.home}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        {isAuthenticated && (
          <li>
            <NavLink
              to={routes.contacts}
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Phonebook
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
