import React, { useEffect, useState } from "react";
import { movieDetail } from "../../api";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { W500_URL } from "../../constant/imgUrl";
import { spacing } from "../../GlobalStyled";

const Container = styled.div`
  display: flex;
  padding: 300px ${spacing.side};
  margin: 0 auto;
  width: 2000px;
`;
const Bg = styled.div`
  margin-right: 20px;
  img {
    width: 55vh;
  }
`;
const Text = styled.div`
  padding-top: 100px;
  justify-content: center;
  p {
    font-size: 40px;
    padding: 20px 50px;
    margin-bottom: 20px; /* 문단 사이의 여백 추가 */
  }
`;
const Title = styled.h1`
  text-align: center;
  padding-bottom: 100px;
  font-size: 100px;
  margin-bottom: 50px; /* 제목과 다음 요소 사이의 여백 추가 */
`;
const Runtime = styled.p``;
const ReleaseDate = styled.p``;
const Genre = styled.p``;
const Overview = styled.p`
  padding: 20px 0; /* 위아래 여백 추가 */
  line-height: 1.4; /* 줄 간격 조정 */
`;

// movieDetail을 불러오기를 할 것임 안에 변수를 만들어 받아올 것임
export const Detail = () => {
  const [detailData, setDetailData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        console.log("Fetching details for movie ID:", id);
        const DetailResult = await movieDetail(id);
        // console.log(data); //data는 지역변수이므로 바깥에서 끄집어 내게끔 해줘야함
        console.log(DetailResult);
        setDetailData(DetailResult);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  console.log(detailData);
  if (!detailData) return <div>Loading...</div>;
  return (
    <Container>
      <Bg>
        <img
          src={`${W500_URL}${detailData.poster_path}`}
          alt={detailData.title}
        />
      </Bg>
      <Text>
        <Title>
          <h1>{detailData.title}</h1>
        </Title>
        <Runtime>런타임: {detailData.runtime}분</Runtime>
        <ReleaseDate>개봉일: {detailData.release_date}</ReleaseDate>
        <Genre>
          장르:
          {detailData.genres.map((genre) => (
            <span key={genre.id}> {genre.name} </span>
          ))}
        </Genre>
        <Overview>줄거리 : {detailData.overview}</Overview>
      </Text>
    </Container>
  );
};

// const data = movieDetail(424);
// console.log(data);
// }, {}); //useEffect는 콜백함수와 참고값들이 들어감
// // promise를 방지하기위해서 async await를 붙여야하는데 async는 함수 앞에 써야하므로
// // 함수로 감싸줘야함    (() => {}, {})이런식으로 감싸주면 됨
