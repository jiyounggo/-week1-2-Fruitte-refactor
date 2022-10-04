#  Fruitte의 스토어 리뉴얼 개발

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&amp;logo=React&amp;logoColor=black"> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&amp;logo=React Router&amp;logoColor=white"> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&amp;logo=styled-components&amp;logoColor=white"> <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&amp;logo=Bootstrap&amp;logoColor=white">

## 실행방법

```
npm i
npm start
```

## 폴더구조

<details><summary>폴더구조
</summary>

```
📦src
 ┣ 📂api
 ┃ ┗ 📜api.js
 ┣ 📂common
 ┃ ┗ 📂utils
 ┃ ┃ ┗ 📜constant.js
 ┣ 📂components
 ┃ ┣ 📂Categorize
 ┃ ┃ ┣ 📜detailInfo.js
 ┃ ┃ ┣ 📜question.js
 ┃ ┃ ┣ 📜review.js
 ┃ ┃ ┗ 📜Tab.js
 ┃ ┣ 📂data
 ┃ ┃ ┗ 📜data.json
 ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┗ 📜Footer.style.js
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜DummyHeader.jsx
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┗ 📜Header.style.js
 ┃ ┣ 📂Management
 ┃ ┃ ┣ 📂Lnb
 ┃ ┃ ┃ ┣ 📜ManagementLnb.jsx
 ┃ ┃ ┃ ┗ 📜ManangementLnb.style.js
 ┃ ┃ ┣ 📜Management.jsx
 ┃ ┃ ┣ 📜Management.style.js
 ┃ ┃ ┣ 📜ManagementProduct.jsx
 ┃ ┃ ┗ 📜ManagementProduct.style.js
 ┃ ┣ 📂NotFound
 ┃ ┃ ┗ 📜NotFound.jsx
 ┃ ┣ 📂Order
 ┃ ┃ ┣ 📜Order.jsx
 ┃ ┃ ┣ 📜Order.style.js
 ┃ ┃ ┗ 📜OrderForm.jsx
 ┃ ┣ 📂OrderDetail
 ┃ ┃ ┣ 📂LeftSection
 ┃ ┃ ┃ ┗ 📜LeftSection.jsx
 ┃ ┃ ┣ 📂MyInfo
 ┃ ┃ ┃ ┗ 📜MyInfo.jsx
 ┃ ┃ ┣ 📂OrderTable
 ┃ ┃ ┃ ┣ 📜OrderTable.jsx
 ┃ ┃ ┃ ┗ 📜OrderTable.style.js
 ┃ ┃ ┣ 📜OrderDetail.jsx
 ┃ ┃ ┗ 📜OrderDetail.style.js
 ┃ ┣ 📂pagination
 ┃ ┃ ┣ 📜Pagination.jsx
 ┃ ┃ ┗ 📜Pagination.style.js
 ┃ ┣ 📂ProductsDetail
 ┃ ┃ ┗ 📜ProductDetail.jsx
 ┃ ┣ 📂Registration
 ┃ ┃ ┣ 📜RegistForm.jsx
 ┃ ┃ ┣ 📜RegistForm.style.js
 ┃ ┃ ┣ 📜Registration.jsx
 ┃ ┃ ┣ 📜Registration.styl.js
 ┃ ┃ ┣ 📜Sales.jsx
 ┃ ┃ ┣ 📜Sales.style.js
 ┃ ┃ ┣ 📜SalesList.jsx
 ┃ ┃ ┗ 📜SalesList.style.js
 ┃ ┣ 📜ProductList.style.js
 ┃ ┗ 📜ProductsList.jsx
 ┣ 📂data
 ┃ ┗ 📜data.json
 ┣ 📂hooks
 ┃ ┣ 📜useInput.jsx
 ┃ ┗ 📜useInputs.jsx
 ┣ 📂styles
 ┃ ┣ 📜global-styles.js
 ┃ ┗ 📜theme.js
 ┣ 📜App.js
 ┗ 📜index.js
```

## </details>

---

## 🚀프로젝트 설명 및 팀원역할

- 크게 사용자 기능과 관리자 기능으로 나누어지며, 모든 페이지는 반응형 페이지 이다.
- 데이터는 `public>data>data.json` 을 이용하였다.

### 1. 사용자 기능 - 스토어 상품목록 조회

- 상품 이미지와 함께 상품목록이 나타난다.
- 30개 이상의 상품목록에 10개 단위의 페이지네이션을 적용했다.

### 2. 사용자 기능 - 스토어 상품 상세조회 

- 상품 이미지, 상품 옵션, 수량, 가격 등이 나타나 있다.
- 다른 옵션 적용 가능하며, 수량변경 가능하다.

### 3. 사용자 기능 - 스토어 상품 주문 

- 상품 선택, 수량, 배송주소, 연락처를 적어 주문할 수 있다.

### 4. 사용자 기능 - 스토어 상품 주문 내역확인 

- 사용자가 주문한 상품 목록들이 나타난다.
- 주문 번호, 상품 이미지, 상품명, 주문 수량, 주문 옵션, 상품 가격 등이 나타나 있다.
- 상품 이미지와 상품명을 클릭하면 상품 상세조회 페이지로 이동한다.

### 5. 관리자 기능 - 스토어 상품목록 등록 페이지 

- 관리자가 상품 이미지, 상품 옵션, 수량, 가격 등을 입력하여 상품을 등록할 수 있는 페이지 이다.

### 6. 관리자 기능 - 스토어 상품목록 관리 페이지 

- 등록한 상품을 삭제할수 있는 기능이 있다.
- 상품의 노출 여부 조정 기능이 있다.

### 7. 기타 - GNB & Footer 

---

## 데모 영상

https://drive.google.com/file/d/1lucKq6OUpRk590EiGtYnQ9rWJNaHjYu9/view?usp=sharing

## 배포 링크

http://tedjv.s3-website.ap-northeast-2.amazonaws.com/
