import { Button } from '@mui/material';
import { ContainerAbout } from './styles';

const About = () => {
    return (
        <ContainerAbout >
            <div className='aboutEnergiar'>
                <h3>Nossos serviços</h3>
                <p className='txt'>Como podemos ajudar?</p>
                <p>Somos especializados em tornar as experiências de manutenção de rotina e reparos de emergência sem preocupações. Ligue para nós hoje para saber como nosso processo realmente é simples.</p>
                <Button variant='contained'>Saber mais</Button>
            </div>
        </ContainerAbout >
    );
};

export default About;