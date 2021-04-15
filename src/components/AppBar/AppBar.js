import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import {getAuthenticated} from '../../redux/auth/auth-selectors'

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  Searchbar: {
    top: '0',
    left: '0',
    position: 'sticky',
    zIndex: '1100',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '64px',
    marginBottom: '6px',
    // paddingRight: "24px",
    // paddingLeft: "24px",
    paddingTop: '12px',
    paddingBottom: '12px',
    color: '#fff',
    backgroundColor: '#3f51b5',
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2) 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  },

  NavList: {
    // display: "flex",
    marginBottom: 0,
  },
});
const AppBar = () => {
  const isAuthenticated = useSelector(getAuthenticated);
  const classes = useStyles();

  return (
    <header className={classes.Searchbar}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
      {/* {false ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};

export default AppBar;
