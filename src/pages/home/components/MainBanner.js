import styled, { keyframes } from "styled-components";
import { ORIGIN_URL } from "../../../constant/imgUrl";
import { spacing } from "../../../GlobalStyled";
import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import ReactPlayer from "react-player";
import { FaVolumeUp } from "react-icons/fa";
import { FaVolumeXmark } from "react-icons/fa6";

// 애니메이션을 위한 keyframes 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// 컴포넌트 선언 순서 조정
const SoundButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0);
  color: white;
  border: none;
  padding: 0 ${spacing.side} 30px;
  cursor: pointer;
  z-index: 7;
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s ease-in-out, visibility 1s ease-in-out;

  svg {
    font-size: 30px; // 아이콘 크기 조정
  }
`;

const Container = styled.section`
  height: 80vh;
  background: url(${ORIGIN_URL}${(props) => props.$bgUrl}) no-repeat center /
    cover;
  padding: 420px ${spacing.side} 0 ${spacing.side};
  position: relative;
  z-index: 5;
  overflow: hidden;

  h3 {
    padding-top: 380px;
    font-size: 80px;
    font-weight: 700;
    letter-spacing: -3px;
    margin-bottom: 30px;
    position: relative;
    z-index: 6;
  }

  p {
    width: 500px;
    line-height: 30px;
    font-size: 20px;
    font-weight: 300;
    position: relative;
    z-index: 6;
  }

  @media screen and (max-width: 768px) {
    padding: 550px ${spacing.moSide} 0 ${spacing.moSide};

    h3 {
      font-size: 40px;
      margin-bottom: 15px;
    }
    p {
      max-width: 500px;
      width: 100%;
      font-size: 14px;
      line-height: 20px;
    }
  }

  &:hover ${SoundButton} {
    opacity: 1;
    visibility: visible;
    animation: ${fadeIn} 1s ease-in;
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7830854668674698) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  opacity: 1;
  z-index: 5;
`;

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.$isHovered ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  z-index: 4;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 6;
  padding: 0 20px;
`;

const Title = styled.h3`
  font-size: 80px;
  font-weight: 700;
  letter-spacing: -3px;
  margin-bottom: 30px;
  position: relative;
  opacity: ${(props) => (props.$isHovered ? 0.4 : 1)};
  transition: opacity 1s ease-in-out;
  z-index: 6;
`;

const Description = styled.p`
  width: 500px;
  line-height: 30px;
  font-size: 20px;
  font-weight: 300;
  opacity: 0.7;
  position: relative;
  z-index: 6;
`;

export const MainBanner = ({ data, videoKey }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    setIsPlaying(true);
    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setIsPlaying(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  return (
    <Container
      $bgUrl={data.backdrop_path}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <BlackBg />
      <VideoWrapper $isHovered={isHovered} $isVisible={isVisible}>
        {isVisible && (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoKey}`}
            playing={isPlaying}
            width="100%"
            height="100%"
            muted={isMuted}
            key={videoKey}
          />
        )}
      </VideoWrapper>
      <ContentWrapper>
        <Link to={`/detail/${data.id}/`}>
          <Title $isHovered={isHovered}>{data.title}</Title>
          <Description>{data.overview.slice(0, 100) + "..."}</Description>
        </Link>
      </ContentWrapper>
      <SoundButton onClick={toggleMute}>
        {isMuted ? <FaVolumeXmark /> : <FaVolumeUp />}
      </SoundButton>
    </Container>
  );
};
