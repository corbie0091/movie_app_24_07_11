import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
    poiknt: "crimson",
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
    a{
        text-decoration: none;
        color: crimson;
    }
`;