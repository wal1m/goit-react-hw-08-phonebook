import { useSelector, useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { getUsername } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';

const useStyles = createUseStyles({
  Container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: 10,
  },

  Name: {
    // fontWeight: 700,
    // marginRight: 12,
  },
});

const UserMenu = () => {
  const name = useSelector(getUsername);
  const dispatch = useDispatch();
  const onLogout = () =>  dispatch(logOut());
  const classes = useStyles();
  return (
    <div className={classes.Container}>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span className={classes.Name}>Welcome, {name}</span>
        <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
