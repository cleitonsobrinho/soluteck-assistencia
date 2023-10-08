// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ContainerCorousel from "./carousel-styles";

const Carousel = () => {
  return (
    <ContainerCorousel>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="box-carousel">
            <p>
              "Eu fiquei muito satisfeita com o serviço da Sóluteck. O técnico
              foi muito profissional e atencioso. Ele explicou o que estava
              errado na minha enceradeira e me deu um orçamento justo. O
              conserto foi feito em apenas um dia e minha enceradeira está
              funcionando perfeitamente." <br /> <br /> - João
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="box-carousel">
            <p>
              "Eu fiquei muito satisfeita com o serviço da Sóluteck. O técnico
              foi muito profissional e atencioso. Ele explicou o que estava
              errado na minha enceradeira e me deu um orçamento justo. O
              conserto foi feito em apenas um dia e minha enceradeira está
              funcionando perfeitamente." <br /> <br /> - Maria
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="box-carousel">
            <p>
              "Eu fiquei muito satisfeita com o serviço da Sóluteck. O técnico
              foi muito profissional e atencioso. Ele explicou o que estava
              errado na minha enceradeira e me deu um orçamento justo. O
              conserto foi feito em apenas um dia e minha enceradeira está
              funcionando perfeitamente." <br /> <br /> - Guilherme
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </ContainerCorousel>
  );
};

export default Carousel;
