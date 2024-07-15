
// import단계
const fetch = require("node-fetch");

// 기본 url     *주의: /로 끝나게 설정했는지 안했는지 파악해서 /3// 이런식이 안되도록 해줘야함 
const baseUrl = "http://api.themoviedb.org/3/";


// 권한부여 
const options = {
    method: "GET",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2NmYjFiOGQyZjc3NWZmMmM1ZWVhZTQyNTg0NTJiYSIsIm5iZiI6MTcyMDY4NzA4NC4yNzgxOTUsInN1YiI6IjY2OGY5NjRiNTBhZGVmNjliN2Y2YzliMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MXxoDEsHF7GVdkT3Tk0SI-O32b_ck4nryeG1PZTrM5s'
    },
}
// baseUrl과 options는 요청이 없음 => 필요한 요청 + 매개변수 변경 해줘야함 

// 이전 API 키 값이 Url에 들어갔었는데, 이번엔 Headers에 들어감 
// Headers라는 것은 요청 Header 응답 Header 어떤 것들을 요청했고 했는지 검사창 >Network 에서 알 수 있음 

// 이제 요청할 것만 담아 주면 끝냄 
// 최신 영화를 요청할지 인기 영화를 요청할지 다양한 요청이 가능한데, 
// 함수를 만들어서 여러개를 요청할 것임 


// now playing 기능 요청 함수 만들기 
// export const nowPlaying = () => fetch(baseUrl, options)
// 아직 요청은 하지 않음 

// baseUrl에 더해서 movie/now_playing 을 붙여주면됨
// export const nowPlaying = () => fetch(baseUrl + "movie/now_playing", options)
// 즉, baseUrl ( http://api.themoviedb.org/3/ ) + ( movie/now_playing )임 

// 여기에 매개변수까지 요청해야함 ( ?language=ko-kr )
// export const nowPlaying = () => fetch(baseUrl + "movie/now_playing?language=ko-kr", options)
//이렇게 계속 추가해야하나?

// const url =  baseUrl + "movie/now_playing?language=ko-kr"
// 간단하게 변수로 만들어서 활용해볼까??

// export const nowPlaying = () => fetch(url, options)
// 하지만 url을 매개변수등 그런것들을 다른 요청할때 계속 바꿔줘야함...
// 그래서 url을 함수로 만들었음 (변경되는 부분만 변경할 수 있도록함) 
const url = (urlName) => { 
    return baseUrl + `${urlName}?language=ko-kr`
}
// export const nowPlaying = () => fetch(url, options)
// 요청하는 부분을 매개변수화 시켜서 만듦

// url이라는 함수를 요청 ?    => url(movie/now_playing) 이런식으로 하면 
// 잘 조합이 이루어져서 요청이 되겠죠?

// export const nowPlaying = () => fetch(url("movie/now_playing"), options)
// url 에 이렇게 넣어주기만 하면 받아올 수 있겠죠??

// 요청하고난 뒤에 처리?
export const nowPlaying = () => 
    fetch(url("movie/now_playing"), options).then(res => res.json());
//whY? 우리식으로 json형태로 만들어줘야함 


// 이후 Home components로 넘어가서 요청 함 


// 요청건수가 다 다를 수 있기 때문에 함수를 만든 것임


// 24.07.15 3강 1교시  ( 메소드명은 popular (0) , Popular(x))
export const popular = () => 
    fetch(url("movie/popular"), options).then(res => res.json());
// 이휴 home.js로 가서 설정

// 다시 와서 나머지 2개도 반복학습진행

export const topRated = () =>
    fetch(url("movie/top_rated"), options).then(res => res.json());

export const upcoming = () =>
    fetch(url("movie/upcoming"), options).then(res => res.json());