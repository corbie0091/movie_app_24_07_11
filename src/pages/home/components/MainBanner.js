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
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  svg {
    font-size: 30px;
  }
`;

const Container = styled.section`
  height: 80vh;
  background: url(${ORIGIN_URL}${(props) => props.$bgUrl}) no-repeat center /
    cover;
  padding: 0 ${spacing.side};
  position: relative;
  z-index: 5;
  overflow: hidden;

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
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 6;
  max-width: 500px;
  width: 100%;
  padding: 20px;

  @media screen and (max-width: 768px) {
    bottom: 10px;
    left: 10px;
    padding: 10px;
  }

  @media screen and (max-width: 576px) {
    bottom: 5px;
    left: 5px;
    padding: 5px;
  }
`;

const Title = styled.h3`
  font-size: 70px;
  font-weight: 700;
  letter-spacing: -3px;
  margin-bottom: 20px;
  opacity: ${(props) => (props.$isHovered ? 0.4 : 1)};
  transition: opacity 0.3s ease-in-out;
  max-width: 100%;
  word-break: break-word;
  overflow-wrap: break-word;

  @media screen and (max-width: 1200px) {
    font-size: 60px;
  }

  @media screen and (max-width: 992px) {
    font-size: 50px;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
    max-width: 90%;
  }

  @media screen and (max-width: 576px) {
    font-size: 40px;
    max-width: 100%;
  }
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 300;
  opacity: 0.7;

  @media screen and (max-width: 1200px) {
    font-size: 18px;
  }

  @media screen and (max-width: 992px) {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 576px) {
    font-size: 0px;
  }
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
