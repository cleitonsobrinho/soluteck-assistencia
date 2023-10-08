import ContainerAbout from "./about-soluteck-styles";

const AboutSoluteck = () => {
  return (
    <ContainerAbout>
      <div className="box-img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06WheCkrOXSRvFYsRg2tEKjD53l2_Ew89Tw&usqp=CAU"
          alt="Sobre"
        />
      </div>

      <div className="box-descripition">
        <h1>Sobre nós</h1>
        <p>
          A Soluteck surgiu da necessidade de oferecer um serviço completo e de
          qualidade aos nossos clientes. Nossa equipe é formada por
          profissionais altamente qualificados e responsáveis, que estão prontos
          para atender todas as demandas em um só lugar.Contamos com
          especialistas nas áreas de elétrica, Manutenção de compressores,
          enceradeiras, aspiradores, lavadoras e outros equipamentos do
          seguimento. Garantindo um atendimento personalizado e eficiente. Nosso
          compromisso com a excelência no trabalho é refletido no crescimento
          constante da nossa rede de clientes, fruto de indicações e
          reconhecimento pelo trabalho bem executado. Entre em contato conosco
          para saber mais sobre nossos serviços!
        </p>
      </div>
    </ContainerAbout>
  );
};

export default AboutSoluteck;
