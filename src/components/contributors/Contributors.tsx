import "./Contributors.scss";
import { ContributorsData } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Contributors = () => {
  return (
    <>
      <section className="contributors container section" id="qualification">
        <h2 className="section__title">References</h2>
        <span className="section__subtitle">My Best References</span>

        <Swiper
          className="contributors__container"
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            769: {
              slidesPerView: 3,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
        >
          {ContributorsData.map(
            ({ id, name, avatar, position, description, github }) => {
              return (
                <>
                  <SwiperSlide className="contributor__card" key={id}>
                    <a
                      href={github}
                      className="contributor__github"
                      target="_blank"
                    >
                      <img
                        src={avatar}
                        alt={name}
                        className="contributor__img"
                      />
                      <h3 className="contributor__name">{name}</h3>
                      <h3 className="contributor__position">{position}</h3>
                      <p className="contributor__description">{description}</p>
                    </a>
                  </SwiperSlide>
                </>
              );
            }
          )}
        </Swiper>
      </section>
    </>
  );
};

export default Contributors;
