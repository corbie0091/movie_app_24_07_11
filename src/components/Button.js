import styled from "styled-components";
import shouldForwardProp from "@styled-system/should-forward-prop";

const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "primary", // props값 DOM으로 바로 연결시키기 위해
})`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? "black" : "lightgray")};
  color: white;
  border: none;
  border-radius: 50px;
  margin-top: 10px;
  margin-bottom: 50px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.primary ? "darkgray" : "gray")};
  }
`;

export default Button;
