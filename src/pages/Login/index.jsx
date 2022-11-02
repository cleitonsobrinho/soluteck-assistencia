import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import Button from '@mui/material/Button';


const Login = () => {
    const navigate = useNavigate()

    const handleSignInClick = () => {
        navigate('/')
    }
    return (
        <Container>
            <h1>O que eu posso fazer por você hoje?</h1>
            <Button onClick={handleSignInClick} variant='contained'>Entrar</Button>
        </Container>

    );
};


export default Login;