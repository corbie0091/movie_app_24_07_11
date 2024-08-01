import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { spacing } from "../../../GlobalStyled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { W500_URL } from "../../../constant/imgUrl";
import { Link } from "react-router-dom";
import axios from "axios";

const Section = styled.section`
  padding: 100px 0 0 ${spacing.side};
  @media screen and (max-width: 768px) {
    padding: 100px 0 0 ${spacing.moSide};
  }
`;

const CustomScrollbar = styled.div`
  .swiper {
    padding-bottom: 15px;
  }
  .swiper-scrollbar {
    height: 5px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    bottom: 0;
    margin-right: ${spacing.side};
  }
  .swiper-scrollbar-drag {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 5px;
  }
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
  position: relative;
`;

const SwiperSlideStyled = styled(SwiperSlide)`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1);
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover .rank {
    opacity: 1;
    transform: scale(1.15);
  }
`;

const Rank = styled.span`
  font-size: 24px;
  font-weight: 900;
  margin-right: 10px;
  color: #fff;
  opacity: 0.8;
  background-color: #000;
  border-radius: 50%;
  padding: 10px 16px;
  position: absolute;
  top: 10px;
  left: 10px;
  transition: transform 0.3s ease, background-color 0.3s ease;
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding-bottom: 160%;
  position: relative;
  overflow: hidden;
  border-radius: 2%;
  transition: transform 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const MovieImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  z-index: 0;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const MovieTitle = styled.h3`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

const GenreList = styled.div`
  font-size: 14px;
  color: #888;
  text-align: center;
  margin-top: 3px;
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
      spaceBetween: 15,
    },
    320: {
      slidesPerView: 3.2,
      spaceBetween: 10,
    },
  },
};

export const Movies = ({ movieData = [], title }) => {
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=9d8c505a912ec85d2931ff479b347e0c&language=ko-kr`
        );
        setGenreList(response.data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  const getGenreNames = (genreIds) => {
    return genreIds
      .map((id) => {
        const genre = genreList.find((genre) => genre.id === id);
        return genre ? genre.name : "Unknown Genre";
      })
      .join(", ");
  };

  return (
    <Section>
      <Title>{title}</Title>
      <CustomScrollbar>
        <Swiper
          modules={[Scrollbar]}
          scrollbar={{ draggable: true }}
          {...params}
        >
          {movieData.slice(0, 10).map((data, index) => {
            const genreNames = getGenreNames(data.genre_ids);
            return (
              <SwiperSlideStyled key={data.id}>
                <Link to={`/detail/${data.id}/`}>
                  <MovieContainer>
                    <ImageWrapper>
                      <MovieImage
                        src={`${W500_URL}${data.poster_path}`}
                        alt={data.title}
                      />
                      <Rank className="rank">{index + 1}</Rank>
                    </ImageWrapper>
                    <MovieTitle>{data.title}</MovieTitle>
                    <GenreList>{genreNames || "No Genre"}</GenreList>
                  </MovieContainer>
                </Link>
              </SwiperSlideStyled>
            );
          })}
        </Swiper>
      </CustomScrollbar>
    </Section>
  );
};
