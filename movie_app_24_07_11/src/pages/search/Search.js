import { set, useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";
import { colors, spacing } from "../../GlobalStyled";
import { searchMovie } from "../../api";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Loading } from "../../components/Loading";
import { W500_URL } from "../../constant/imgUrl";

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

const Conwrap = styled.div`
  display: grid;
  grid-template-columns: repeat(
    5,
    1fr
  ); // repeat(가로로 몇개, 그리드 당 크기);  1fr : 하나씩 동등하게 나눠 갖자라는 뜻 //몬드리안디자인도 가능하니 생각해야함
  row-gap: 30px; // 그리드 만의 간격  row-gap: 위아래 간격
  column-gap: 15px; // column-gap: 위아래 간격
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 300px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Search = () => {
  const [searchData, setSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSearchResult = async (data) => {
    const { keyword } = data;

    if (!keyword.trim()) {
      setSearchError("검색어를 입력해주세요");
      setSearchData([]); // 검색어가 비어있으면 기존 그리드를 지웁니다
      return;
    }

    setIsLoading(true);
    setSearchError("");
    setSearchData([]); // 새로운 검색을 시작할 때 기존 그리드를 지웁니다

    try {
      const { results } = await searchMovie(keyword);
      if (results.length === 0) {
        setSearchError("검색 결과가 없습니다");
      } else {
        setSearchData(results);
      }
    } catch (error) {
      setSearchError("검색 중 오류가 발생했습니다");
    } finally {
      setIsLoading(false);
    }
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
        {errors?.keyword && (
          <ErrorMessage>{errors.keyword.message}</ErrorMessage>
        )}
      </Form>

      {searchData?.length === 0 ? (
        "검색 결과가 없습니다"
      ) : (
        <>
          {searchData && (
            <Conwrap>
              {isLoading ? (
                <Loading />
              ) : (
                <>
                  {searchData.map((data) => (
                    <Con key={data.id}>
                      <Link to={`/detail/${data.id}`}>
                        <Bg>
                          <img
                            src={W500_URL + data.poster_path}
                            alt={data.title}
                          />
                        </Bg>
                      </Link>
                    </Con>
                  ))}
                </>
              )}
            </Conwrap>
          )}
        </>
      )}
    </Container>
  );
};
