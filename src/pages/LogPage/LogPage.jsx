import { useState } from 'react';
import {
  FormLogin,
  LabelStyled,
  InputStyled,
  ButtonStyled,
} from './LogPageStyled';
import ErrorModal from 'components/ErrorModal/ErrorModal';
import { logIn } from 'redux/auth/authOperation';
import { useDispatch, useSelector } from 'react-redux';
import { selectError } from 'redux/auth/authSelectors';

const LogPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authError = useSelector(selectError);
console.log(authError);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!email.length || !password.length)
      return alert('Please fill in all fields');
    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };
  return (
    <>
      {!authError ? (
        <FormLogin FormLogin onSubmit={handleSubmit}>
          <h2>Login</h2>
          <LabelStyled>
            <span>Email</span>
            <InputStyled
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={handleInputChange}
            />
          </LabelStyled>
          <LabelStyled>
            <span>Password</span>
            <InputStyled
              type="tel"
              name="password"
              placeholder="password"
              value={password}
              onChange={handleInputChange}
            />
          </LabelStyled>
          <ButtonStyled type="submit">Login</ButtonStyled>
        </FormLogin>
      ) : (<ErrorModal message={authError}/>
       
      )}
    </>
  );
};
export default LogPage;
