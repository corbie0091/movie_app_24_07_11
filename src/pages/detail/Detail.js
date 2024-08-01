import React, { useEffect, useState } from "react";
import { movieDetail, videos, getMovieCredits } from "../../api";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ORIGIN_URL } from "../../constant/imgUrl";
import { Loading } from "../../components/Loading";
import { spacing } from "../../GlobalStyled";
import { PageTitle } from "../home/components/PageTitle";
import ReactPlayer from "react-player";

const Container = styled.div`
  padding: 150px 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    padding: 70px ${spacing.moSide} 0 ${spacing.moSide};
    flex-direction: column;
  }
`;

const CoverImg = styled.img`
  width: 45%;
  object-fit: cover;
  margin-right: 5%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

const ConWrap = styled.div`
  width: 50%;

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
    margin-right: 15px;

    @media screen and (max-width: 768px) {
      padding: 2px 4px;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }

  display: flex;
  flex-wrap: wrap;
`;

const Genres = styled.ul`
  list-style: disc;
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

const VideoWrapper = styled.div`
  padding: 20px 10%;
  background-color: rgb(79, 79, 79);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 20px;
  padding: 10px;

  .video-item {
    flex: 0 0 auto;
    width: 370px; // 비디오의 너비 설정
    height: 200px; // 비디오의 높이 설정
    border-radius: 10px; // 비디오 모서리 둥글게
    overflow: hidden; // 비디오가 둥근 모서리 밖으로 벗어나지 않도록
    background-color: #000; // 비디오 배경 색상
    position: relative; // 위치를 상대적으로 설정
  }

  @media screen and (max-width: 768px) {
    .video-item {
      width: 100%; // 작은 화면에서는 비디오가 전체 너비를 차지하도록 설정
      height: 200px; // 작은 화면에서는 비디오의 높이 조정
    }
  }
`;

const CastList = styled.ul`
  margin-top: 50px;
  list-style: none;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    img {
      border-radius: 50%;
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }

    span {
      font-size: 18px;
    }
  }
`;

export const Detail = () => {
  const [videoData, setVideoData] = useState(null);
  const [detailData, setDetailData] = useState(null);
  const [castData, setCastData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id: movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const detailResult = await movieDetail(movieId);
        const movieResult = await videos(movieId);
        const creditsResult = await getMovieCredits(movieId);

        console.log("DetailResult:", detailResult);
        console.log("MovieResult:", movieResult);
        console.log("CreditsResult:", creditsResult);

        setVideoData(movieResult);
        setDetailData(detailResult);
        setCastData(creditsResult.cast);
      } catch (error) {
        console.error("데이터를 가져오는 데 실패했습니다:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  if (isLoading) {
    return <Loading />;
  }

  const hasVideoData =
    videoData && videoData.results && videoData.results.length > 0;

  return (
    <>
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

          {castData.length > 0 && (
            <CastList>
              <PageTitle title="출연진" />
              {castData.slice(0, 5).map((cast) => (
                <li key={cast.cast_id}>
                  <img
                    src={
                      cast.profile_path
                        ? ORIGIN_URL + cast.profile_path
                        : "https://via.placeholder.com/50"
                    }
                    alt={cast.name}
                  />
                  <span>
                    {cast.name} ({cast.character}역)
                  </span>
                </li>
              ))}
            </CastList>
          )}
          <Desc>{detailData.overview}</Desc>
        </ConWrap>
      </Container>

      {hasVideoData && (
        <VideoWrapper>
          <PageTitle title="비디오" />
          <VideoList>
            {videoData.results.map((video) => {
              if (!video.key) {
                return null;
              }

              return (
                <div className="video-item" key={video.key}>
                  <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${video.key}`}
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "10px", objectFit: "cover" }}
                    controls
                  />
                </div>
              );
            })}
          </VideoList>
        </VideoWrapper>
      )}
    </>
  );
};
