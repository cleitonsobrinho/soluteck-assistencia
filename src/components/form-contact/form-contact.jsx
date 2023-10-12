import ContainerForm from "./form-contact-styles";

const FormContact = () => {
  return (
    <ContainerForm>
      <div className="inform">
        <div className="container-input">
          <div className="ContainerBox">
            <div className="box">
              <p>Nome:</p>
              <input type="text" className="input-form" />
            </div>

            <div className="box">
              <p>E-mail:</p>
              <input type="email" className="input-form" />
            </div>
          </div>

          <p>Mensagem</p>

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="message"
          ></textarea>

          <div className="container-pressInput">
            <input type="submit" value="Enviar" className="press-input" />
          </div>
        </div>
      </div>

      <div className="box-text">
        <h2>Entre em contato conosco agora</h2>
        <p>
          Preencha o formulário abaixo para entrar em contato com nossa
          assistência técnica especializada em enceradeiras, lavadoras de piso,
          aspiradores de pó e compressores. Estamos aqui para ajudá-lo.
        </p>
      </div>
    </ContainerForm>
  );
};

export default FormContact;
