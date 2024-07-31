import React, { useEffect, useState } from "react";
import { movieDetail, videos } from "../../api";
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
  margin-top: 50px;
`;

const VideoList = styled.div`
  margin-top: 30px;

  .video-item {
    margin-bottom: 20px;
  }
`;

export const Detail = () => {
  const [videoData, setVideoData] = useState(null);
  const [detailData, setDetailData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id: movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const DetailResult = await movieDetail(movieId);
        const MovieResult = await videos(movieId);
        console.log("DetailResult:", DetailResult);
        console.log("MovieResult:", MovieResult);
        setVideoData(MovieResult);
        setDetailData(DetailResult);
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

        {hasVideoData ? (
          <VideoWrapper>
            <PageTitle title="비디오" />
            <VideoList>
              {videoData.results.length > 0 ? (
                videoData.results.map((video) => {
                  if (!video.key) {
                    return null;
                  }

                  console.log("Video Key:", video.key); // 개별 비디오의 key를 출력
                  return (
                    <div className="video-item" key={video.key}>
                      <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${video.key}`}
                        width="100%"
                        height="auto"
                        controls
                      />
                    </div>
                  );
                })
              ) : (
                <p>비디오가 없습니다.</p>
              )}
            </VideoList>
          </VideoWrapper>
        ) : (
          <p>비디오 데이터가 없습니다.</p>
        )}
      </ConWrap>
    </Container>
  );
};
