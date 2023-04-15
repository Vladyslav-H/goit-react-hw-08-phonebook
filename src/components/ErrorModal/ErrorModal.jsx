import { Wrapp,Message } from "./ErrrorModal.styled";

const ErrorModal = ({ message }) => {
    return (
        <Wrapp><Message>{message }</Message></Wrapp>
    )
}
export default ErrorModal;