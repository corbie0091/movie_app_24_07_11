import { SyncLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* position: fixed;  있으니가 푸터가 올라가고 난 다음에 로딩이 뜨기때문에 삭제함 */
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Container>
      <SyncLoader size={15} color="salmon" />
    </Container>
  );
};
