import styled from "styled-components";
import { spacing } from "../../../GlobalStyled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css"; // Swiper의 기본 스타일을 불러옵니다.
import "swiper/css/scrollbar"; // Swiper의 Scrollbar 스타일을 불러옵니다.
import { W500_URL } from "../../../constant/imgUrl";
import { Link } from "react-router-dom";

// Section 스타일
const Section = styled.section`
  padding: 100px 0 0 ${spacing.side};
  @media screen and (max-width: 768px) {
    padding: 100px 0 0 ${spacing.moSide};
  }
`;

// CustomScrollbar 스타일
const CustomScrollbar = styled.div`
  .swiper {
    padding-bottom: 15px; /* 스크롤바가 들어갈 공간을 확보합니다 */
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

// Title 스타일
const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
`;

// ImageWrapper와 MovieImage 스타일
const ImageWrapper = styled.div`
  width: 100%;
  padding-bottom: 160%; /* 16:9 비율 (높이 / 너비 * 100) */
  position: relative;
  overflow: hidden;
  border-radius: 2%; /* 모서리 둥글게 */
`;

const MovieImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지가 지정된 크기에 맞게 잘립니다 */
`;

// MovieContainer와 MovieTitle 스타일
const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MovieTitle = styled.h3`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 13px;
  text-align: center; /* 텍스트 가운데 정렬 */
  display: -webkit-box;
  -webkit-line-clamp: 1; /* 최대 한 줄 표시 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal; /* 줄 바꿈 허용 */
`;

// Swiper 파라미터 설정
const params = {
  slidesPerView: 8.3,
  spaceBetween: 20,
  breakpoints: {
    1024: {
      slidesPerView: 8.3,
    },
    640: {
      slidesPerView: 5.2,
      spaceBetween: 15,
    },
    320: {
      slidesPerView: 3.2,
      spaceBetween: 10,
    },
  },
};

export const Movies = ({ movieData, title }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <CustomScrollbar>
        <Swiper
          modules={[Scrollbar]} // Scrollbar 모듈을 추가합니다.
          scrollbar={{ draggable: true }} // Scrollbar를 활성화하고 드래그 가능하도록 설정합니다.
          {...params}
        >
          {movieData.map((data) => (
            <SwiperSlide key={data.id}>
              <Link to={`/detail/${data.id}/`}>
                <MovieContainer>
                  <ImageWrapper>
                    <MovieImage
                      src={`${W500_URL}${data.poster_path}`}
                      alt={data.title}
                    />
                  </ImageWrapper>
                  <MovieTitle>{data.title}</MovieTitle>
                </MovieContainer>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </CustomScrollbar>
    </Section>
  );
};
