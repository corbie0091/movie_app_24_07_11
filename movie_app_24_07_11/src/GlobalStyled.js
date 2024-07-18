import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  point: "crimson",
};

export const spacing = {
  side: "100px",
  moSide: "20px",
};

export const Globalstyled = createGlobalStyle`
    ${reset}

    * {box-sizing:border-box;}

    body{
        font-family: "Noto Sans KR", sans-serif;
        background-color: #1d1d1d;
        color: white;
        letter-spacing: -1px; //자간
        word-break: keep-all; // 띄어쓰기를 기준으로 문장을 끊어줌 
    }

    img{
        width: 100%;
        display: block; // 인라인 요소 제거 
    }

    a{
        text-decoration: none;
        color: white;
    }

`;
