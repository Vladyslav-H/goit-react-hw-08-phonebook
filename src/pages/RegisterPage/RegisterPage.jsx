import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { registerUser } from 'redux/auth/authOperation';
import ErrorModal from 'components/ErrorModal/ErrorModal';
import { selectError } from 'redux/auth/authSelectors';

import {
  FormRegister,
  LabelStyled,
  InputStyled,
  ButtonStyled,
} from './RegisterPageStyled';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authError = useSelector(selectError);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
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
    if (!name.length || !email.length || !password.length)
      return alert('Please fill in all fields');
    dispatch(registerUser({ name, email, password }));
    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <>
      {!authError ? (
        <FormRegister onSubmit={handleSubmit}>
          <h2>Registration</h2>
          <LabelStyled>
            <span>Name</span>
            <InputStyled
              type="text"
              name="name"
              placeholder="name"
              value={name}
              onChange={handleInputChange}
            />
          </LabelStyled>
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
              type="text"
              name="password"
              placeholder="password"
              value={password}
              onChange={handleInputChange}
            />
          </LabelStyled>
          <ButtonStyled type="submit">Register</ButtonStyled>
        </FormRegister>
      ) : (
        <ErrorModal message={authError} />
      )}
    </>
  );
};

export default RegisterPage;
