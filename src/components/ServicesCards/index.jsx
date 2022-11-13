import Card1 from '../../assets/images/card1.jpg'
import Card2 from '../../assets/images/card2.jpeg'

import { ContainerCards } from './styles'

const ServicesCards = () => {
    return (
        <ContainerCards>
            <div className='box1'>
                <div className='boxCard1'>
                    <img src={Card1} alt="Serviços em ar condicionado" />
                </div>
                <p id='textPrev'>Ao planejar com antecedência, voçê pode evitar que se sinta estressado e oprimido. Somos especializados em elétrica e ar condicionado. </p>
            </div>

            <div className='box1'>
                <p id='textBold'>Precisa de ajuda imediatamente?</p>
                <p id='textRed'>ligue para nós agora: <a href="tel:+5561996978834">61 996978834</a>  </p>
                <div className='boxCard1'>
                    <img src={Card2} alt="Quadro de comando elétrico" />
                </div>
            </div>
        </ContainerCards>
    );
};

export default ServicesCards;