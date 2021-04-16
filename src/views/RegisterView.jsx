import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { register } from '../redux/auth/auth-operations';

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

const RegisterView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = e => setName(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };

  const classes = useStyles();
  return (
    <div>
      <h1>Страница регистрации</h1>

      <form onSubmit={handleSubmit} className={classes.Form} autoComplete="off">
        <label className={classes.Label}>
          Имя
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </label>

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

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegisterView;
