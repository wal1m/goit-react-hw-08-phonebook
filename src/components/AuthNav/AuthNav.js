import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  NavList: {
    // display: "flex",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom: 0,
  },
});

const AuthNav = () => {

 const classes = useStyles();

  return (
    <div>
      <ul className={classes.NavList}>
        <li>
          <NavLink
            exact
            to={routes.login}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Вход
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.register}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Регистрация
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
