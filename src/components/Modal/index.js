import { IconContainer, CrossIcon, FormContainer,ModalContainer} from './style';

const Modal = (props) => {

    return (
        <ModalContainer>
            <FormContainer>
                {!props.button ?? <IconContainer><CrossIcon onClick={props.onclick}/></IconContainer>}
                {props.children}
            </FormContainer>
        </ModalContainer>
    )
}

export default Modal