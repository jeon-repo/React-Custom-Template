# [리액트 기본 템플릿]

### 브랜치 타입
기본적으로 redux, redux-persist, redux-toolkit 적용
1. master : 스타일 별도로 적용해야하는 브랜치(none)
2. prime-js : prime-react 라이브러리가 적용(component + css)
3. ~~tailwind-js : tailwind css 라이브러리만 적용(css)~~

### 설정(.env)
1. PORT : 포트 설정
2. REACT_APP_PWA : 옵션을 활성화 하면 service worker 레지스터를 사용
3. REACT_APP_VERSION : index.html 파일에서 사용 
4. REACT_APP_MODE : 실행 or 빌드 시 설정할 모드
5. REACT_APP_WEBSITE_TITLE : 웹 사이트 title 설정
6. REACT_APP_AUTH_MODE : 웹 사이트 접근 권한 사용 여부

### 디렉토리 구조
```
src
-app
  --auth : 인증 기능 추가시 사용
    ---AuthContext.jsx   : 인증 로직 사용될 곳
    ---Authorization.jsx : 접근 권한 처리
    ---authRoles.js      : 인증 권한 구분
  --config
    ---defineConfig.js   : 개발 모드에 따른 값의 구분이 필요한 정의
    ---routesConfig.js   : 라우팅 정의
    ---settingsConfig.js : 리다이렉트 URL, 기본 권한 등을 정의
    ---themeConfig.js    : 프로젝트 테마 관련 정의
  --layout
    ---Layout.jsx : 프로젝트 레이아웃
  --pages : 화면 단위 구분
    ---main : 메인 화면
        ----index.jsx     : 메인 화면 UI
        ----mainConfig.js : 화면별 라우팅 정의
    ---sub  : 서브 화면
        ----store
          -----index.js
          -----subSlice.js : 서브 화면에 동적 리듀싱 되어있는 redux slice
        ----index.jsx
        ----subConfig.js
  --shared-components : 공용 컴포넌트
  --store
    ---index.js          : store, redux-persist 정의
    ---rememeberSlice.js : redux slice 파일
    ---rootReducer.js    : root reducer 정의, redux-persist 설정
    ---userSlice.js      : 기본 유저 redux slice 파일
    ---withReducer.js    : dynamic reducer 기능
  --test : 테스트 코드
-styles : 전역 css
-utils  : 모듈형 기능
  --common  : 공통 기능
    ---utils.js : 템플릿 유틸
  --service : api
```