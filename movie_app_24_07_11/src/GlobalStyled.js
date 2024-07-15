import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
    poiknt: "crimson",
};

export const Globalstyled = createGlobalStyle`
    ${reset}

    * {box-sizing:border-box;}

    body{
        font-family: "Noto Sans KR", sans-serif;
        background-color: #1d1d1d;
        letter-spacing: -1px; //자간
    }

    a{
        text-decoration: none;
        color: crimson;
    }
`;