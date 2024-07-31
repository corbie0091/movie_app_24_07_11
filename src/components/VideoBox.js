import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const VideoBoxContainer = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;

export const VideoBox = ({ url }) => {
  return (
    <VideoBoxContainer>
      <ReactPlayer
        url={url}
        playing={false}
        controls
        width="100%"
        height="100%"
      />
    </VideoBoxContainer>
  );
};
