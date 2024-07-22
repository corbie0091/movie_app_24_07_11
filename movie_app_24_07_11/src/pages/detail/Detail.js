import React, { useEffect, useState } from "react";
import { movieDetail } from "../../api";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ORIGIN_URL } from "../../constant/imgUrl";
import { Loading } from "../../components/Loading";
import { spacing } from "../../GlobalStyled";
import { PageTitle } from "../home/components/PageTitle";

const Container = styled.div`
  padding: 150px 20%;
  display: flex;

  @media screen and (max-width: 768px) {
    padding: 70px ${spacing.moSide} 0 ${spacing.moSide};
    display: block;
  }
`;

const CoverImg = styled.img`
  width: 45%;
  object-fit: cover; // 강제로 이런식으로 contain이나 cover로 맞추고 안되면 반응형으로 만들어줘야 할듯
  margin-right: 5%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

const ConWrap = styled.div`
  width: 40%; // 55% + 40% = 95%  나머지 5%는 여백값으로 자동조정 됨

  h3 {
    font-size: 70px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    h3 {
      font-size: 40px;
      margin-bottom: 15px;
    }
  }
`;

const Info = styled.div`
  span {
    display: block;
    padding: 5px 10px;
    background-color: #555;
    border-radius: 20px;
    font-size: 18px;
    font-family: 400;
    margin-right: 15px;

    @media screen and (max-width: 768px) {
      padding: 2px 4px;
      display: block;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }

  display: flex;
`;

const Genres = styled.ul`
  list-style: disc; //크기가 없음
  font-size: 18px;
  margin-top: 20px;
  margin-left: 20px;

  li {
    margin-top: 10px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
    padding-left: 20px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 400;
  opacity: 0.7;
  margin-top: 100px;
  line-height: 30px;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

// movieDetail을 불러오기를 할 것임 안에 변수를 만들어 받아올 것임
export const Detail = () => {
  const [detailData, setDetailData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id: movieId } = useParams();
  useEffect(() => {
    (async () => {
      try {
        console.log("Fetching details for movie ID:", movieId);
        const DetailResult = await movieDetail(movieId);
        setDetailData(DetailResult);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  console.log(detailData);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <PageTitle title={detailData.title} />
          <CoverImg
            src={ORIGIN_URL + detailData.poster_path}
            alt={detailData.title}
          />
          <ConWrap>
            <h3>{detailData.title}</h3>

            <Info>
              <span>{detailData.release_date}</span>
              <span>{Math.round(detailData.vote_average * 10) / 10}점</span>
              <span>{detailData.runtime}분</span>
            </Info>

            <Genres>
              {detailData.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </Genres>
            <Desc>{detailData.overview}</Desc>
          </ConWrap>
        </Container>
      )}
    </div>
    // <Container>
    //   <Bg>
    //     <img
    //       src={`${W500_URL}${detailData.poster_path}`}
    //       alt={detailData.title}
    //     />
    //   </Bg>
    //   <Text>
    //     <Title>
    //       <h1>{detailData.title}</h1>
    //     </Title>
    //     <Runtime>런타임: {detailData.runtime}분</Runtime>
    //     <ReleaseDate>개봉일: {detailData.release_date}</ReleaseDate>
    //     <Genre>
    //       장르:
    //       {detailData.genres.map((genre) => (
    //         <span key={genre.id}> {genre.name} </span>
    //       ))}
    //     </Genre>
    //     <Overview>줄거리 : {detailData.overview}</Overview>
    //   </Text>
    // </Container>
  );
};

// const data = movieDetail(424);
// console.log(data);
// }, {}); //useEffect는 콜백함수와 참고값들이 들어감
// // promise를 방지하기위해서 async await를 붙여야하는데 async는 함수 앞에 써야하므로
// // 함수로 감싸줘야함    (() => {}, {})이런식으로 감싸주면 됨
