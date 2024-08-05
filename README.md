# Movie review app | 영화 리뷰앱

1. 목적성
   최근의 인기영화에 대한 정보뿐만 아니라 관심있는 영화에 대한 정보를 열람할 수 있다
   예고편, 줄거리, 주연배우, 포스터 등의 정보를 쉽게 얻을 수 있다

2. 기술(stack)
   => js, react, node js git github

4개발기간
=> 7월 26일 ~ 8월 2일 ( 약 8일간 )

5. 프로젝트 개요
   영화에 대한 정보를 얻고자 할 때 네이버등을 활용하는 경우가 많은데,
   이는 보고싶은 내용들이 담겨져 있는 경우가 많이 없었다.
   이번 영화 리뷰앱을 이용하게 된다면, 사용자가 원하는 정보만을
   따로 패키징하여 한 눈에 보기 쉽고, 최근의 영화들에 대한 정보도 알 수 있으며
   검색을 통해 다양한 영화에 대한 검색을 쉽고 빠르게 할 수 있는 장점이 있다.

6. 프로젝트하면서 느낀점
   프로젝트를 통해 앱을 만들게 되면서 결국에는 개발자 본인이 사용할 수 있는 앱을 만들어야
   남들도 사용할 수 있는 포용성이 넓은 앱을 만들겠구나를 깨달았다
   기타 참고 사이트등을 활용하면서 UIUX에 더욱 신경을 쓰는 개발자가 되야함을 깨닫는 계기가 되었다.

7. 프로젝트 진행중 수월하게 진행했던 부분
   레퍼런스 사이트를 충분히 활용함으로써 디자인 설정에 대한 부분을 쉽게 넘어갈 수 있었다.

8. 프로젝트 진행중 개발 어려움
   전체적으로 데이터를 받아오는 부분에 있어서 SPA를 어떻게 활용해야 할지에 대한
   고민들이 많았었다. 메인페이지에서 받아오는 API를 다른 페이지에 넘기는 방법이라든지,
   비슷한 API를 다른 fetch를 통해서 가져와야 하는 가등의 고민들을 많이하게 되었다.

9. 어려움을 해결한 방법 = useEffect를 활용하여 받아오는 방법

```s
useEffect(() => {
    const fetchData = async () => {
      try {
        const detailResult = await movieDetail(movieId);
        const movieResult = await videos(movieId);
        const creditsResult = await getMovieCredits(movieId);

        console.log("DetailResult:", detailResult);
        console.log("MovieResult:", movieResult);
        console.log("CreditsResult:", creditsResult);

        setVideoData(movieResult);
        setDetailData(detailResult);
        setCastData(creditsResult.cast);
      } catch (error) {
        console.error("데이터를 가져오는 데 실패했습니다:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);
```

10. 프로젝트 하면서 알게 된 유용한 플러그인 및 라이브러리
    useEffect: 컴포넌트 생명주기 동안 사이드 이펙트를 수행하는 React 훅
    useQuery: 서버 상태를 가져오고 캐시하는 React Query 훅
    useLocation: 현재 URL 위치 정보를 가져오는 React Router 훅
    useNavigate: 프로그래밍 방식으로 페이지 이동을 처리하는 React Router 훅
    useHelmet: HTML 문서 헤더(title, meta 태그 등)를 관리하는 React 훅
    axios: 브라우저와 Node.js에서 HTTP 요청을 쉽게 처리할 수 있게 해주는 자바스크립트 라이브러리
    @styled-system/should-forward-prop: 스타일드 컴포넌트에서 전달할 props를 필터링하는 유틸리티

## 설치 항목

- [x] react-router-dom
- [x] styled-components
- [x] styled-reset
- [x] swiper
- [x] helmet-async
- [x] .font-awesome
- [x] react-hook-form
- [x] react-icon
- [x] axios
- [x] tyled-system/should-forward-prop

<h3>폴더트리</h3
         
📦src<br>
 ┣ 📂components<br>
 ┃ ┣ 📜Button.js<br>
 ┃ ┣ 📜Footer.js<br>
 ┃ ┣ 📜Header.js<br>
 ┃ ┣ 📜Helmet.js<br>
 ┃ ┣ 📜Loading.js<br>
 ┃ ┣ 📜ScrollToTop.js<br>
 ┃ ┣ 📜ScrollToTopBtn.js<br>
 ┃ ┗ 📜VideoBox.js<br>
 ┣ 📂constant<br>
 ┃ ┗ 📜imgUrl.js<br>
 ┣ 📂lib<br>
 ┃ ┗ 📜useScrollTop.js<br>
 ┣ 📂pages<br>
 ┃ ┣ 📂auth<br>
 ┃ ┃ ┣ 📜Login.js<br>
 ┃ ┃ ┗ 📜SignUp.js<br>
 ┃ ┣ 📂detail<br>
 ┃ ┃ ┗ 📜Detail.js<br>
 ┃ ┣ 📂home<br>
 ┃ ┃ ┣ 📂components<br>
 ┃ ┃ ┃ ┣ 📜MainBanner.js<br>
 ┃ ┃ ┃ ┣ 📜Movies.js<br>
 ┃ ┃ ┃ ┗ 📜PageTitle.js<br>
 ┃ ┃ ┗ 📜Home.js<br>
 ┃ ┣ 📂search<br>
 ┃ ┃ ┗ 📜Search.js<br>
 ┃ ┗ 📜PageNotFound.js<br>
 ┣ 📜api.js<br>
 ┣ 📜GlobalStyled.js<br>
 ┣ 📜index.js<br>
 ┣ 📜Router.js<br>
 ┗ 📜routes.js<br>
