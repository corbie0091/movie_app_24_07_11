import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #111;
  color: #eee;
  padding: 20px;

  div {
    width: 100%;
  }
`;

const Form = styled.form`
  width: 25vw;
  height: 50vh;
  padding: 82px;
  background-color: #eee;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    padding-bottom: 20px;
    font-size: 13px;
    color: gray;
    text-align: left;
    width: 100%;

    &:nth-of-type(2) {
      margin-top: 30px;
      margin-bottom: -20px;
    }
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: #333;
  margin-top: 45px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
  outline: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #ddd;
    box-shadow: none;
  }
`;

const GenderButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 50px;
`;

const GenderButton = styled.button`
  flex: 1;
  padding: 15px;
  margin-top: 10px;
  border: 0.2px solid #ccc;
  border-radius: ${(props) => (props.isFirst ? "8px 0 0 8px" : "0 8px 8px 0")};
  background-color: ${(props) =>
    props.selected ? (props.isFirst ? "skyblue" : "lightcoral") : "white"};
  color: ${(props) => (props.selected ? "white" : "black")};
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-right: ${(props) => (props.isFirst ? "none" : "1px solid #ccc")};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: lightgray;
  }
`;

export const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // 회원가입 로직 추가
    console.log({ email, username, password, dateOfBirth, gender });
    // 회원가입 후 메인 화면으로 이동
    navigate("/");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>계속하려면 계정을 만드세요</Title>
        <p>
          MOVIE 계정을 사용하면 Hulu 및 Walt Disney 계열사 전반의 기타 서비스에
          로그인할 수 있습니다.
        </p>
        <p>{email}을 사용하여 계정을 만드세요</p>

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Input
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <Input
          type="date"
          placeholder="Date of Birth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
        />

        <GenderButtonContainer>
          <GenderButton
            type="button"
            isFirst
            selected={gender === "Male"}
            onClick={() => setGender("Male")}
          >
            Male
          </GenderButton>
          <GenderButton
            type="button"
            selected={gender === "Female"}
            onClick={() => setGender("Female")}
          >
            Female
          </GenderButton>
        </GenderButtonContainer>
        <Button
          type="submit"
          primary={username && password && dateOfBirth && gender}
        >
          Sign Up and Go to Home
        </Button>
      </Form>
    </Container>
  );
};
