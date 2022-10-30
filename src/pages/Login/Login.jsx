import { Navigate, useNavigate } from "react-router-dom";
import { Container } from "../Login/Login.styles";

import Button from '@mui/material/Button';



const Login = () => {
    const navigate = useNavigate()

    const handleSignInClick = () => {
        navigate('/')
    }
    return (
        <Container>
            <h1>Bem vindo!</h1>
            <Button onClick={handleSignInClick} variant='contained'>Entrar</Button>
        </Container>

    );
};


export default Login;