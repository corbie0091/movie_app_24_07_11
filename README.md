# Movie review app | 영화 리뷰앱

> Todo List

- [x] Router 설정
- [x] 각 컴포넌트, 폴더 등 설정
- [x] Api 설정
- [x] Loading 컴포넌트 구성
- [x] Header, Footer 등 공통적인 컴포넌트 구성
- [x] Web Font 설정
- [x] 각 페이지 UI 구성과 반응형 (진행중)
- [x] Helmet 설정
- [x] Header scroll Event
- [x] Deploy( 배포 )

이 친구들을 쓰려면 설치해야할 앱들이 있을것임

## 설치 항목

- [x] react-router-dom
- [x] styled-components
- [x] styled-reset
- [x] swiper
- [x] helmet-async
- [x] .font-awesome
- [x] react-hook-form
- [x] react-icons

// 프론트 포폴1
=> 10일~15일 정도는 강사님과 프로젝트 진행
이전 기수들이 만든 영화리뷰 앱 등 그런 것들을 만들 것임
=> 16일~ : 자기 자신의 포폴 제작 (끝날떄 까지)
=> 포폴 갯수: 2~6개 정도로 생각해야함 ( 자기 재량 )
=> 본인이 어떤걸 만들고 싶은지 생각을 하고 있어야 함
=> 당분간은 다른 것에 신경 쓸 여력이 없을듯
=> 취업하기 위해서는 어떤 포폴갯수 퀄리티를 꾸준히 생각해야함
=> 막상 포폴이 준비되어있다하더라도 면접, 포폴준비, 여러 기타 부분이 필요해질수도 있음
포폴갯수가 많으면 좋긴함 whY? 내가 할 수 있는 것을 많이 보여 줄 수 있기 떄문에 어필이 가능하긴함
적당히 한걸 여러개 만들어야함 ( 한개를 완벽하게 하는 것보단 여러개 만드는 것이 point ) - 한개 제대로 만들려다보면 자기 세상에 빠져 있을 것임
=> 지금은 순수하게 제작하는 것에 집중
=> 웹포폴같은 경우는 웹실무라는 과정이 있는데, 우리는 아직 그 과정이 힘들 수 있으니 이 기간동안에 배울 예정

=> 나중에는 각자 시간이 주어질 것임
=> 우리는 영화리뷰앱을 만들 것임
=> 예고편 영상을 받아 오기, 유사한 영화등 어떤 것들을 넣을 수도 있음
=> 로그인 , 회원가입 하는 것
=> 검색부분 에 대한 것 (검색 내용 입력하기전 추천내용등 )
=> 검색한 이후 클릭하면 들어가는 것
=> + 반응형에 대해 적용하는 방법

앞으로 포폴을 어떻게 만들건지에 대해서 ..

이전에는 App.js에 붙이는 방식이었음

지금은 다름

src  
src 하단) pages , components, index.js Router.js App.js +부가적인 요소  
이렇게 구성되어 있을것임

pages 내부) 여러 폴더가 있을 것임 home detail search 등등.. home내부에 각자 필요한 componenets들을 여기서 만들 것임

components 내부 ) Header.js Footer.js Section.js ... 이렇게 늘어가는 것임

// 프론트 포폴2 (9월초쯤끝날예정)
2주남았을때 취업에 대한 꿀팁등을 풀 예정임

<h3>폴더트리</h3
         
```
📦src
 ┣ 📂components
 ┃ ┣ 📜Footer.js
 ┃ ┣ 📜Header.js
 ┃ ┣ 📜Helmet.js
 ┃ ┣ 📜Loading.js
 ┃ ┗ 📜ScrollToTop.js
 ┣ 📂constant
 ┃ ┗ 📜imgUrl.js
 ┣ 📂lib
 ┃ ┗ 📜useScrollTop.js
 ┣ 📂pages
 ┃ ┣ 📂detail
 ┃ ┃ ┗ 📜Detail.js
 ┃ ┣ 📂home
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜MainBanner.js
 ┃ ┃ ┃ ┣ 📜Movies.js
 ┃ ┃ ┃ ┗ 📜PageTitle.js
 ┃ ┃ ┗ 📜Home.js
 ┃ ┣ 📂search
 ┃ ┃ ┗ 📜Search.js
 ┃ ┗ 📜PageNotFound.js
 ┣ 📜api.js
 ┣ 📜GlobalStyled.js
 ┣ 📜index.js
 ┣ 📜Router.js
 ┗ 📜routes.js
```
```
📦PJ3T3_Postie
 ┣ 📂App
 ┃ ┗ 📜PJ3T3_PostieApp.swift
 ┣ 📂Assets.xcassets
 ┣ 📂Components
 ┃ ┣ 📜Button.swift
 ┃ ┣ 📜ClearBackground.swift
 ┃ ┗ 📜LoadingView.swift
 ┣ 📂Core
 ┃ ┣ 📂Home
 ┃ ┃ ┣ 📂View
 ┃ ┃ ┃ ┣ 📜AddLetterView.swift
 ┃ ┃ ┃ ┣ 📜EditLetterView.swift
 ┃ ┃ ┃ ┣ 📜GroupedFavoriteListLetterView.swift
 ┃ ┃ ┃ ┣ 📜GroupedLetterView.swift
 ┃ ┃ ┃ ┣ 📜GroupedListLetterView.swift
 ┃ ┃ ┃ ┣ 📜GroupedMyListLetterView.swift
 ┃ ┃ ┃ ┣ 📜HomeView.swift
 ┃ ┃ ┃ ┣ 📜LetterDetailView.swift
 ┃ ┃ ┃ ┣ 📜LetterImageFullScreenView.swift
 ┃ ┃ ┃ ┣ 📜ListLetterView.swift
 ┃ ┃ ┃ ┣ 📜PageViewController.swift
 ┃ ┃ ┃ ┣ 📜SearchView.swift
 ┃ ┃ ┃ ┣ 📜SlowPostBoxView.swift
 ┃ ┃ ┃ ┗ 📜UIImagePicker.swift
 ┃ ┃ ┣ 📂ViewModel
 ┃ ┃ ┃ ┣ 📜AddLetterViewModel.swift
 ┃ ┃ ┃ ┣ 📜EditLetterViewModel.swift
 ┃ ┃ ┃ ┣ 📜GroupedLetterViewModel.swift
 ┃ ┃ ┃ ┣ 📜HomeViewModel.swift
 ┃ ┃ ┃ ┣ 📜LetterDetailViewModel.swift
 ┃ ┃ ┃ ┣ 📜SlowPostBoxViewModel.swift
 ┃ ┃ ┃ ┣ 📜SummaryApi.swift
 ┃ ┃ ┃ ┗ 📜TextRecognizer.swift
 ┃ ┃ ┗ 📜SummaryApiKeys.plist
 ┃ ┣ 📂Login
 ┃ ┃ ┣ 📂View
 ┃ ┃ ┃ ┣ 📜DeleteAccountButtonView.swift
 ┃ ┃ ┃ ┣ 📜EmailLoginView.swift
 ┃ ┃ ┃ ┣ 📜LoginInputView.swift
 ┃ ┃ ┃ ┣ 📜LoginView.swift
 ┃ ┃ ┃ ┣ 📜NicknameView.swift
 ┃ ┃ ┃ ┣ 📜ReAuthButtonView.swift
 ┃ ┃ ┃ ┗ 📜RegistrationView.swift
 ┃ ┣ 📂Map
 ┃ ┃ ┣ 📂View
 ┃ ┃ ┃ ┣ 📜CoordinaterEtc.swift
 ┃ ┃ ┃ ┣ 📜Coordinator.swift
 ┃ ┃ ┃ ┣ 📜MapCoordinator.swift
 ┃ ┃ ┃ ┗ 📜MapView.swift
 ┃ ┃ ┣ 📂ViewModel
 ┃ ┃ ┃ ┣ 📜LocationManager.swift
 ┃ ┃ ┃ ┣ 📜MapApi.swift
 ┃ ┃ ┃ ┣ 📜MapViewModel.swift
 ┃ ┃ ┃ ┣ 📜MyCoord.swift
 ┃ ┃ ┃ ┗ 📜NaverMap.swift
 ┃ ┃ ┗ 📜MapApiKeys.plist
 ┃ ┣ 📂Root
 ┃ ┃ ┣ 📂View
 ┃ ┃ ┃ ┗ 📜ContentView.swift
 ┃ ┃ ┣ 📂ViewModel
 ┃ ┃ ┃ ┗ 📜ContenViewModel.swift
 ┃ ┃ ┗ 📜ContentView.swift
 ┃ ┣ 📂Setting
 ┃ ┃ ┣ 📂View
 ┃ ┃ ┃ ┣ 📜AlertView.swift
 ┃ ┃ ┃ ┣ 📜FirebaseTestRowView.swift
 ┃ ┃ ┃ ┣ 📜FirebaseTestView.swift
 ┃ ┃ ┃ ┣ 📜InformationView.swift
 ┃ ┃ ┃ ┣ 📜InformationWebView.swift
 ┃ ┃ ┃ ┣ 📜MembershipView.swift
 ┃ ┃ ┃ ┣ 📜NoticeView.swift
 ┃ ┃ ┃ ┣ 📜ProfileEditView.swift
 ┃ ┃ ┃ ┣ 📜ProfileView.swift
 ┃ ┃ ┃ ┣ 📜QuestionView.swift
 ┃ ┃ ┃ ┣ 📜SplashScreenView.swift
 ┃ ┃ ┃ ┗ 📜ThemeView.swift
 ┃ ┃ ┗ 📂ViewModel
 ┃ ┃ ┃ ┗ 📜SettingViewModel.swift
 ┃ ┣ 📂Shop
 ┃ ┃ ┣ 📂View
 ┃ ┃ ┃ ┗ 📜ShopView.swift
 ┃ ┃ ┗ 📂ViewModel
 ┃ ┃ ┃ ┗ 📜ShopViewModel.swift
 ┣ 📂Extenstions
 ┃ ┣ 📜Color.swift
 ┃ ┣ 📜Date.swift
 ┃ ┣ 📜EnvironmentValues.swift
 ┃ ┣ 📜Font.swift
 ┃ ┣ 📜Logger.swift
 ┃ ┣ 📜String.swift
 ┃ ┗ 📜View.swift
 ┣ 📂Font
 ┃ ┣ 📜NanumMyeongjo.otf
 ┃ ┣ 📜NanumMyeongjoBold.otf
 ┃ ┣ 📜SairaStencilOne-Regular.ttf
 ┃ ┣ 📜SourceSerifPro-Black.otf
 ┃ ┗ 📜SourceSerifPro-Light.otf
 ┣ 📂Manager
 ┃ ┣ 📜AppStoreUpdateChecker.swift
 ┃ ┣ 📜AppleSignInHelper.swift
 ┃ ┣ 📜AuthCaseHelper.swift
 ┃ ┣ 📜AuthManager.swift
 ┃ ┣ 📜CryptoUtils.swift
 ┃ ┣ 📜FirestoreManager.swift
 ┃ ┣ 📜FirestoreNoticeManager.swift
 ┃ ┣ 📜FirestoreShopManager.swift
 ┃ ┣ 📜GoogleSignInHelper.swift
 ┃ ┣ 📜NotificationManager.swift
 ┃ ┗ 📜StorageManager.swift
 ┣ 📂Model
 ┃ ┣ 📜AppleUser.swift
 ┃ ┣ 📜GoogleUser.swift
 ┃ ┣ 📜Letter.swift
 ┃ ┣ 📜LetterPhoto.swift
 ┃ ┣ 📜OfficialLetter.swift
 ┃ ┣ 📜PostieUser.swift
 ┃ ┗ 📜Shop.swift
 ┣ 📂Preview Content
 ┃ ┗ 📂Preview Assets.xcassets
 ┣ 📜.DS_Store
 ┣ 📜GoogleService-Info.plist
 ┗ 📜PJ3T3_Postie.entitlements
```
