import ContainerService from "./service-styles";

const Service = () => {
  return (
    <ContainerService>
      <div>
        <h1>Nossos serviços</h1>
      </div>
      <div className="service-section">
        <div className="box-service">
          <img
            src="https://images.tcdn.com.br/img/img_prod/829782/enceradeiraindustrial350_2393_1_20200910173643.jpg"
            alt="Enceradeira"
          />
          <div className="container-text">
            <h2>Enceradeiras Industriais</h2>
            <p>
              Somos especializados na manutenção e reparo de Enceradeiras
              industriais.
            </p>
            <button>Mais Informações</button>
          </div>
        </div>

        <div className="box-service">
          <img
            src="https://comerclin.com.mx/wp-content/uploads/2022/05/lavadora-de-pisos-fang-17-c-viper-FOTO2.jpg"
            alt="Lavadora de piso"
          />
          <div className="container-text">
            <h2>Lavadoras de piso</h2>
            <p>
              Somos especializados na manutenção e reparo de Lavadoras de pisos.
            </p>
            <button>Mais Informações</button>
          </div>
        </div>

        <div className="box-service">
          <img
            src="https://www.dutramaquinas.com.br/view/img/produtos/alta/364278_compressor_de_ar_60_pes_425_litros_15_hp_175_lbs_trifasico_fort_mswv_60_425.webp"
            alt=""
          />
          <div className="container-text">
            <h2>Compressores Industriais</h2>
            <p>Somos especializados na manutenção e reparo de Compressores.</p>
            <button className="button-compressor">Mais Informações</button>
          </div>
        </div>
      </div>
    </ContainerService>
  );
};

export default Service;
