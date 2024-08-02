import { useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";
import { spacing } from "../../GlobalStyled";
import { searchMovie } from "../../api";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Loading } from "../../components/Loading";
import { W500_URL } from "../../constant/imgUrl";

const Container = styled.div`
  padding: 150px ${spacing.side};

  @media screen and (max-width: 768px) {
    padding: 150px 40px 150px ${spacing.moSide};
  }
`;

const Form = styled.form`
  position: relative;
  input {
    all: unset;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #555;
    margin-bottom: 20px;
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
`;

const ErrorMessage = styled.h4`
  font-size: 18px;
  margin-top: 20px;
  color: gold;
`;

const Conwrap = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr); /* 최대 8개 항목 */
  row-gap: 30px;
  column-gap: 15px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(5, 1fr); /* 1200px 이하에서는 5개 항목 */
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 768px 이하에서는 2개 항목 */
  }

  @media screen and (max-width: 360px) {
    grid-template-columns: 1fr; /* 480px 이하에서는 1개 항목 */
  }
`;

const Con = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .title {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  img {
    border-radius: 8px;
    object-fit: cover;
  }
`;

const Bg = styled.div`
  height: 300px;
  width: 100%;
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
        searchError
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
                        <div className="title">{data.title}</div>
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
