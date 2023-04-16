import PropTypes from 'prop-types';
import { Wrapp, Message } from './ErrrorModal.styled';

const ErrorModal = ({ message }) => {
  return (
    <Wrapp>
      <Message>{message}</Message>
    </Wrapp>
  );
};

ErrorModal.propTypes = {
  message: PropTypes.string,
};

export default ErrorModal;
