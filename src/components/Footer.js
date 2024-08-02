import styled from "styled-components";

const Container = styled.footer`
  height: 150px;
  border-top: 1px solid #555;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  color: white;
  letter-spacing: 5px;
`;

export const Footer = () => {
  return <Container>&copy; Xaexaewan 2024</Container>;
};
