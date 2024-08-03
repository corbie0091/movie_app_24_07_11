import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #111;
`;

const LoginBox = styled.div`
  width: 25vw;
  height: auto; /* Height auto for content adaptation */
  padding: 82px;
  background-color: #eee;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  p {
    padding: 30px 0;
    font-size: 13px;
    color: gray;
    letter-spacing: 1;
    text-align: center; /* Center text for better alignment */
  }

  @media screen and (max-width: 1440px) {
    width: 35vw;
    padding: 60px;
  }

  @media screen and (max-width: 1024px) {
    width: 50vw;
    padding: 50px;
  }

  @media screen and (max-width: 768px) {
    width: 80vw;
    padding: 40px;
  }

  @media screen and (max-width: 480px) {
    width: 90vw;
    padding: 20px;
  }
`;

const Title = styled.h2`
  font-size: 50px;
  font-weight: 800;
  color: #111;
  margin-top: 40px;
  text-align: center; /* Center text for better alignment */

  @media screen and (max-width: 1440px) {
    font-size: 42px;
    margin-top: 35px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 36px;
    margin-top: 30px;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-top: 25px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
    margin-top: 20px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  margin: 10px 0;
  position: relative;
  &:focus {
    border-color: crimson;
    box-shadow: none;
  }
`;

const Label = styled.label`
  position: absolute;
  top: -10px;
  left: 0px;
  background-color: white;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #111;
  color: black;
  padding: 5px 5px;
  pointer-events: none;
  border-radius: 6px 6px 0 0;

  h3 {
    padding-left: 5px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 10px;
  margin: 10px 0;
  font-size: 16px;
  border: 1px solid #111;
  border-radius: 6px;
  box-sizing: border-box;
  outline: none;
  box-shadow: 0 0px px rgba(0, 0, 0, 0.5);

  &:focus {
    border-color: black;
    box-shadow: none;
  }

  @media screen and (max-width: 480px) {
    padding: 12px 8px;
    font-size: 16px;
  }
`;

export const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/signup", { state: { email } });
  };

  return (
    <Container>
      <LoginBox>
        <Title>로그인 또는 가입</Title>
        <p>
          계속하려면 이메일을 입력하세요. 없는 경우 새로 만들라는 메시지가
          표시됩니다.
        </p>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <Input
              type="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Label>
              <h3>E-mail</h3>
            </Label>
          </InputContainer>
          <p>
            MOVIE를 사용하면 Disney+, ESPN, Walt Disney World 등과 같은 Walt
            Disney 계열사 전체의 서비스와 경험에 원활하게 로그인할 수 있습니다.
          </p>
          <Button type="submit" primary={email.length > 0}>
            Continue
          </Button>
        </form>
      </LoginBox>
    </Container>
  );
};
