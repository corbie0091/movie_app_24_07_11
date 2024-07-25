// import를 알파벳순으로 정리할 필요성이 있다
import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upcoming } from "../../api";
import { Loading } from "../../components/Loading";
import "swiper/css"; // 24.07.17
import { Movies } from "./components/Movies";
import { MainBanner } from "./components/MainBanner";
import { PageTitle } from "./components/PageTitle";

export const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [ratedData, setRatedData] = useState();
  const [upcomingData, setUpcomingData] = useState();
  const [isLoading, setIsLoading] = useState(true); // 로딩은 기본적으로 true를 저장해놓고 있어야해서

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResult } = await nowPlaying();
        // => 비구조 할당시 이름이 중복될 땐 상위와 같이 이름을 변경할 수 있음
        const { results: popResult } = await popular();
        const { results: ratedResult } = await topRated();
        const { results: upcomeResult } = await upcoming();
        // console.log(upcom);
        setNowData(nowResult);
        setPopData(popResult);
        setRatedData(ratedResult);
        setUpcomingData(upcomeResult);
        // 모든게 다 읽혀지고 나면 로딩이 끝나도록 해줌
        setIsLoading(false);
      } catch (error) {
        console.log(error + "라는 오류가 발생했습니다");
      }
    })();
  }, []);

  console.log(nowData);
  // console.log(popData);
  // console.log(ratedData);
  // console.log(upcomingData);
  console.log(isLoading);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle title={"Home"} />
          <MainBanner data={nowData[0]} />

          <Movies title="현재 상영 영화" movieData={nowData} />
          <Movies title="인기 영화" movieData={popData} />
          <Movies title="평점 좋음" movieData={ratedData} />
          <Movies title="개봉예정" movieData={upcomingData} />
        </>
      )}
    </>
  );
};

// const data = nowPlaying();
// console.log(data);

// nowplaying 콘솔로 해보니 Promise 열어보니 요청이 잘 받아온 것을 확인할 수 있음
// 이제 promise가 뭐고 어떻게 뜯어내는지 파악할 수 있어야함
// Promise = 비동기
// 요청을 하면 시간이 걸림 => 비동기 작업을 해서 먼저 요청할 수 있도록 진행한 것임
// 비동기 작업이 끝나고 난뒤에 어떤 작업을 해주세요! 라는 것임
// 요청작업을 받아올 동안 그림을 그리고 있어야함 ( 그릇을 만드는 작업느낌 )

// useQuery는 처리를 알아서 해주는 느낌
// useEffect를 배워볼 것임

// useEffect란?   (왜? 효율적인 앱을 위한 방식)
// React Life Cycle
// 사이트를 각 컴포넌트로(헤더 섹션 푸터등등 ) 우린 나눠놓음
// index.js에서 다 합쳐져보이는데, 중간중간 전부다 받아오는게 다 다를 수 있음
// 이걸 제어 ? 빠르고 느리고 한 것들을 동시에 보여주고자 하는 것

// 맨 처음에 그림을 그리는 데 있어서 생성이 되는 과정:( 그리기 전 )
// 1.constructor (가상의 공간에서 생성해서 그림을 그리는 과정에 있음 )
// 2.render ( 그림을 그리는 과정 , 아직 브라우저에는 x  )
// 3.componentDidMount ( 실제 브라우저에 안착시키는 부분 )
// 이 작업중 중간에 잡아 놓고 한번에 보내줄건지 그런 것들에 대한 제어 o

// 업데이트 할 때가 있을 것임 ( ex. 좋아요를 누름 => 숫자가 올라감 )
// 1. shouldComponentUpdate ( 어떤것이 업데이트 되었는지 판단 )
// 2. render(변경된 부분만 업데이트 진행 )
// 3. componentDidUpdate

// 우리가 지금 요청을 하고 난 다음에 진행해야함
// ex. 넷플릭스 title, 영화 쭉있고 ... 근데 title만 있고 영화가 없으면 별로임 =>
// 그래서 한번에 보여지게 해주는 것 ( 데이터를 먼저 가져오기 위해서 제어 하는 것이 useEffect라는 것임 )

// useEffect() 내부에는 2가지 매개변수가 들어감 1콜백함수 2의존성이 들어감(배열)
// 6번째 라인 참고

// useEffect(() => {
//     console.log("테스트");
//  }, []);
//  console.log("테스트2");
// 이렇게 되면 테스트2가 먼저 실행이 되고 안에 있는것이 실행이 됨 ( 비동기 작업진행 )

// 비동기 작업을  어떻게 할 건지 ( 렌더링 작업 순서 ) 컨트롤도 가능함 -2교시

// Promise 비동기 제어를 할때)
// 2가지가 있음 async await ( 어딘가에 붙여야하는 규칙이 있음 )
// async는 함수 앞에 붙여줘야함
// export const Home = () => {

//     useEffect(async () => {
//        const data = await nowPlaying();
//        console.log(data);
//     }, []);

//     return <div>Home</div>;
// };
// ㄴ 이러면 오류가 남 ( 콜백함수 앞에는 쓰면 안됌 ) -> const data를 감싸는 함수를 만들어서 써야함

// useEffect( () => {
//     const data =  async () => {
//      const data = await nowPlaying();
//      console.log(data);
//     }
//     data();
//  }, []);
// 되긴 되는데 복잡,,, 마지막에 data();로 호출도 해야함

// (() => {});
// 콜백함수 호출을 줄이는 방법?  ( )로 감싸주면 된다!
// useEffect( () => {
//     (async() => {
//         const data = await nowPlaying();
//         console.log(data);
//     })();
// }, []);

// useEffect는 다 끝난다음에 return을 실행하라라는뜻
// promise가 뜸 = 비동기작업을 처리 요망함
// async await 는 비동기를 처리할 때 사용함 이를 사용
// (() => {})(); 을 사용하여 async await를 처리해주면 된다

//이후 {result} 비구조화할당을 해서 보여줌

// 하지만 우리는 의존성을 갖게됨 ( 네트워크오류로 서버가 터지면 어떻게 보여질까? )
// 예외처리를 해줘야함
// 예외처리? if문(조건문)임 => 조건을 다 적어야함 ..
// try ~ catch   // 파일을 끊어주기 위해 finally를 사용하는 경우도 있음
// 예외가 발생할 거 같을때 감싸주면 되는 것임
// 근본적으로 여기선 useEffect말고 nowPlaying에서 문제 발생할 확률이 높음
// try  { } 안에 문제가 발생할거 같은 함수를 적어 놓으면 됨
// catch (error){} 이런식으로 하면 됨
// ex) useEffect( () => {
//     (async() => {
//         try {
//             const { results } = await nowPlaying();
//         console.log(results);
//         }catch(error) {
//             console.log(error + "라는 오류가 발생했습니다");
//         }
//     })();
// }, []);

// 강사님 필기 )
// 에러는 2가지 예외가 있음 1. 컴파일에러 2. 런타임에러
// 1.컴파일에러란? 실행되기 전에 번역에서 오류를 내는 것
// 우리에겐 그냥 영어 -> 이것을 0 1 이진법으로 변환시켜주는게 컴파일러
// 2.런타임에러란? 실행중에 나타남
// 보통 유저가 앱이나 게임등을 사용중에 생기는 오류
// * try ~ catch
// => 예외가 발생할 거 같은 코드를 제어하는 역할을 함

// ex) try {
//     예외 위험 코드
// } catch (error) {
//     예외 처리 코드
// } finally {
//     예외와 상관없이 무조건 실행해야하는 코드
// }

// 결국 받아온 것을 <div></div> 에 뿌려질 수 있어야함

// 지역변수를 바깥으로 끄집어 내는 방법? useState를 이용해야함
// const [nowData, setNowData] = useState();

// useEffect( () => {
//     (async() => {
//         try {
//             const { results } = await nowPlaying();
//             setNowData(results);
//         }catch(error) {
//             console.log(error + "라는 오류가 발생했습니다");
//         }
//     })();
// }, []);

// console.log(nowData);
