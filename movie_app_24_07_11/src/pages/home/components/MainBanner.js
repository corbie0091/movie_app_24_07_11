import styled from "styled-components";
import { ORIGIN_URL } from "../../../constant/imgUrl";
import { spacing } from "../../../GlobalStyled";

const Container = styled.section`
  height: 80vh;
  background: url(${ORIGIN_URL}${(props) => props.$bgUrl}) no-repeat center /
    cover;
  padding: 420px ${spacing.side} 0 ${spacing.side};
  position: relative;
  z-index: 5;
  h3 {
    font-size: 80px;
    font-weight: 700;
    letter-spacing: -3px;
    margin-bottom: 30px;
    position: relative;
  }

  p {
    width: 500px;
    line-height: 30px;
    font-size: 20px; //기본 사이즈는 16px이지만 메인 본문이므로 20px로 해야할 듯
    opacity: 0.7; // 타이틀 강조를 위해 본문 투명하게
    font-weight: 300; // 타이틀 강조를 위해 ""
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
      font-size: 14px; // 10px이하로는 절대 내리면 안됨 보통 12px정도 아니면 14px
      line-height: 20px;
    }
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
`;

export const MainBanner = ({ data }) => {
  return (
    <Container $bgUrl={data.backdrop_path}>
      <BlackBg />
      <h3>{data.title}</h3>
      <p>{data.overview.slice(0, 100) + "..."}</p>
    </Container>
  );
};
