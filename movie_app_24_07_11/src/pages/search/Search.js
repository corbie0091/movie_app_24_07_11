import { useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";
import { colors, spacing } from "../../GlobalStyled";
import { searchMovie } from "../../api";

const Container = styled.div`
  padding: 150px ${spacing.side};
`;

const Form = styled.form`
  position: relative;
  input {
    all: unset;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #555;
    &::placeholder {
      font-size: 0px;
    }
    padding: 0 10px;
    font-size: 20px;
    letter-spacing: 0;
  }

  button {
    all: unset;
    position: absolute;
    top: 20px;
    right: 0;
    font-size: 20px;
    cursor: pointer;
  }
`; // div가 아닌 form임을 인지!

const ErrorMessage = styled.h4`
  font-size: 18px;
  margin-top: 20px;
  color: gold;
`;

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSearchResult = async (data) => {
    const { keyword } = data;

    const result = await searchMovie(keyword);
    await console.log(result);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSearchResult)}>
        <input
          {...register("keyword", {
            required: "검색내용을 입력해 주세요😘",
          })}
          type="text"
          placeholder="Search"
        ></input>
        <button>
          <h3>
            <BiSearch />
          </h3>
        </button>
        <ErrorMessage>{errors?.keyword?.message}</ErrorMessage>
      </Form>
    </Container>
  );
};
