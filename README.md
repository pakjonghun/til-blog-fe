## TIL 개인 블로그

- 블로그 제작 목적 : 쉽게 포스트를 필요한 자료를 검색 하기 위해 작성
- 블로그 제작 이유
  - next 프레임워크로 ssh 방식으로 작성(초기버전) : vercel 무료버전은 생각보다 느림
  - ec2 에 프론트와 백엔드를 같이 넣어서 관리 해서 검색 속도를 빠르게 하기 위함
- 사용 기술 : react, redux, tailwind

## 알게된점

- redux-rtk 는 get 요청 한 데이터를 계속 한 페이지에서 띄울경우 사용하기 응용하기 어렵다.
- 캐슁을 axios 나 다른 툴로 하면서 redux-thunk 같은 방식으로 하는 것이 훨씬 편함.