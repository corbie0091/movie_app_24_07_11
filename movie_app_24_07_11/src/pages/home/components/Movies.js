import styled from "styled-components";
import { spacing } from "../../../GlobalStyled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import 'swiper/css'; // Swiper의 기본 스타일을 불러옵니다.
import 'swiper/css/scrollbar'; // Swiper의 Scrollbar 스타일을 불러옵니다.
import { W500_URL } from "../../../constant/imgUrl";
import { Link } from "react-router-dom";
import { movieData } from "../Home";


const CustomScrollbar = styled.div`
  .swiper {
    padding-bottom: 20px; /* 스크롤바가 들어갈 공간을 확보합니다 */
  }
  .swiper-scrollbar {
    height: 5px; /* 스크롤바의 높이 */
    background: rgba(255, 255, 255, 0.2); /* 스크롤바 배경색 */
    border-radius: 10px; /* 스크롤바의 모서리를 둥글게 */
    bottom: 0; /* 스크롤바를 컨테이너의 아래쪽에 위치시킵니다 */
    margin-right: ${spacing.side};
  }
  .swiper-scrollbar-drag {
    background: rgba(255, 255, 255, 0.7); /* 드래그 부분의 배경색 */
    border-radius: 5px; /* 드래그 부분의 모서리를 둥글게 */
  }
`;

const Section = styled.section`
    padding: 100px ${spacing.side} 0 ${spacing.side};
`;

const Title = styled.h3`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
`;

const MovieTitle = styled.h3`
    font-size: 18px;
    margin-top: 20px;
`;

const params = {
    slidesPerView: 8.3,
    spaceBetween: 20,
    breakpoints: {
        1024: {
            slidesPerView: 8.3,
        }, 
        640: {
            slidesPerView: 5.2,
            spaceBetween: 15
        },
        320: {
            slidesPerView: 3.2,
            spaceBetween: 10,
        },
    },
};
export const Movies = ({movieData, title}) => {
    return (
        <Section>
             <Title>{title}</Title>
                <CustomScrollbar>
                <Swiper
                    modules={[Scrollbar]}  // Scrollbar 모듈을 추가합니다.
                    scrollbar={{ draggable: true }}  // Scrollbar를 활성화하고 드래그 가능하도록 설정합니다.
                    {...params} 
                >
                    {movieData.map((data) => (
                        <SwiperSlide key={data.id}>
                            <Link to={`/detail/${data.id}/`}>
                                <img
                                    src={`${W500_URL}${data.poster_path}`}
                                    alt={title}
                                />
                                <MovieTitle>{data.title}</MovieTitle>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                </CustomScrollbar>
            
        </Section>
    );
};
