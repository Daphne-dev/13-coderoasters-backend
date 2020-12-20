# Drink trade 프로젝트(Code Roasters)
[Drink  trade](https://www.drinktrade.com/)는 개인의 커피 취향을 분석하고 판매하는 커피 원두 쇼핑몰입니다.
해당 사이트를 클론하는 프로젝트를 진행했습니다.
짧은 프로젝트 기간 동안 개발에 집중해야 했기에 디자인/기획 부분만 클론하였고 개발에 관한 부분은 모두 직접 구현했습니다.

## 프로젝트 참가자

### FrontEnd
- 김보현
- 조연정
- 임향수
- 조혜미

### BackEnd
- 김동현
- 민경민

## 프로젝트 기간
2020.11.02 ~ 2020.11.13

## 기술 스택

### FrontEnd
- HTML/CSS
- JavaScript
- React
- Sass

### BackEnd
- Node.js
- Prisma
- Jest
- Docker
- MySQL

### 협업 도구
- Slack
- Git + GitHub
- Trello를 이용한 일정 관리 및 작업 현황 확인
- Postman
- Notion을 이용한 회의

## 구현한 기능

### FrontEnd
#### Navbar
#### Cart
#### Quiz Page
- map과 filter 메서드를 이용해 컴포넌트 재사용 및 특정 데이터만 호출
- fetch 함수와 state를 이용해 사용자의 답변을 배열에 저장해 백엔드에게 전송
- URL parameters를 활용한 동적 라우팅 구현
#### Login Page
- 구글 소셜 로그인 API 호출하여 구현
- 로그인 및 회원가입 validation 구현
- 로그인, 회원가입 tabs menu 기능 구현

#### Product Details Page
- 동적 라우팅을 이용하여 상세 페이지로 이동 기능 구현

### BackEnd  
#### 회원가입 & 로그인
- bcrypt를 사용한 암호화
- JWT를 이용한 토큰 발행
- 구글 소셜 로그인 구현

#### 장바구니
- 상품의 장바구니 등록
- 장바구니 상품수량 변경 및 목록 삭제
- 장바구니 내역 조회

#### 주문
- 주문 내역 조회 

#### 상품 페이지
- 상품 리스트 필터링 및 페이지네이션 기능 API 구현
- 상품 디테일 API 구현
- 특정 상품과 연관된 추천 상품 구현

#### Quiz
- 




## Reference
- 이 프로젝트는 [Drink trade](https://www.drinktrade.com/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.


