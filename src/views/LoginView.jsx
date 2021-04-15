import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  Form: {
    // width: 320,
  },

  Label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
});

const LoginView = () => {
  const [email, setEmail] = useState('zxs@zxs.zxs');
  const [password, setPassword] = useState('zxszxs123');

  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };

  const classes = useStyles();
  return (
    <div>
      <h1>Страница логина</h1>

      <form onSubmit={handleSubmit} className={classes.Form} autoComplete="off">
        <label className={classes.Label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>

        <label className={classes.Label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginView;
