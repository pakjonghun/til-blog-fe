## TIL 개인 블로그

- 블로그 제작 목적 : 쉽게 포스트를 필요한 자료를 검색 하기 위해 작성
- 블로그 제작 이유
  - next 프레임워크로 ssh 방식으로 작성(초기버전) : vercel 무료버전은 생각보다 느림
  - ec2 에 프론트와 백엔드를 같이 넣어서 관리 해서 검색 속도를 빠르게 하기 위함
- 사용 기술 : react, redux, tailwind

## 알게된점

- redux-rtk 를 응용하기 어려운 부분
  - get 방식으로 통신을 여러번 해서 같은 페이지에서 계속 띄울경우 한페이지에 통신 코드가 많아져서
  - 불필요한 통신이 발생 하거나 변수를 계속 바꿔주거나 api query 에서 queryFn 으로 커스텀을 하거나
  - 등등 할 것이 늘어난다.
- 캐슁을 axios 나 다른 툴로 하더라도 redux-thunk 같은 방식으로 하는 것이 훨씬 편함.

## 향후계획

- 백엔드에 마크다운 파일이 있는데
- til 작성하고 푸시하고 ec2에서 다시 받아서 배포하고
- 이거 자동으로 하는 방법을 찾아봐야 겠다.
- 듣기로 젠킨스 같은 걸로 한다고 들었는데 차근차근 학습 해야 겠다.
