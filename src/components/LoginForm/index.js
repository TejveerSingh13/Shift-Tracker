
import { ButtonContainer } from "../InputForm/style"
import { Container, Input, InputCover, InputLabel, Logo, FormButton,SU } from "./style"

const LoginForm = ( props) => {
    return (
        <Container>
            <div><Logo /></div>
            <InputCover error={false}>
                    <InputLabel>User Name</InputLabel>
                    <Input type= 'text' />
            </InputCover>
            <InputCover error={false}>
                    <InputLabel>Password</InputLabel>
                    <Input type= 'text'/>
            </InputCover>
            <ButtonContainer>
                <FormButton margin={true} width={true}>Login</FormButton>
            </ButtonContainer>
            <div>Don't have an account?, <SU onClick={props.signup}>Sign-Up</SU></div>
        </Container>
    )
}
export default LoginForm