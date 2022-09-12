import React, { useState } from 'react';
import styled from 'styled-components';
import SelectedProduct from './SelectedProduct';
import ProductProvider from './ProductProvider';
function Product({ items }) {
  let [selectOption, setSelectOption] = useState([]);

  // 총금액
  const totalAmount = selectOption.reduce((accu, cart) => accu + cart.price * cart.quantity, 0);

  return (
    <RightSide>
      <div>
        <Img src={items?.url} />
      </div>
      <Right>
        <Title>{items?.name}</Title>
        <SaleBtn>SALE</SaleBtn>
        <BestBtn>BEST</BestBtn>
        <Middle>
          <Price>{items?.salePrice}원</Price>
          <SalePrice>{items?.price}원</SalePrice>
        </Middle>
        <hr />
        <p>미생물을 이용한 친환경 농볍으로 걸러 더욱 맛있는 국내산 친환경 생 아스파라거스</p>
        <div>
          <Origin>원산지 강원도 화천군</Origin>
        </div>
        <div>
          <Origin>배송방법 택배</Origin>
        </div>
        <div>
          <Origin>배송비 4,000원(40,000원 이상 무료배송)</Origin>
        </div>
        <SelectedProduct
          selectOption={selectOption}
          setSelectOption={setSelectOption}
          items={items}
        />
        <div>
          <div>
            {selectOption[0] &&
              selectOption.map(product => (
                <ProductProvider
                  product={product}
                  selectOption={selectOption}
                  setSelectOption={setSelectOption}
                  key={product.id}
                />
              ))}
          </div>
          <TotalSum>상품금액 총{totalAmount} 원</TotalSum>
          <BtnState>
            <BuyBtn>구매하기</BuyBtn>
            <CartBtn>장바구니</CartBtn>
            <HartBtn>♡</HartBtn>
          </BtnState>
          <ButtomBtn>
            <NaverPay>N pay 구매하기</NaverPay>
          </ButtomBtn>
        </div>
      </Right>
    </RightSide>
  );
}

const Middle = styled.div`
  display: flex;
`;
const Price = styled.p`
  font-size: 20px;
  color: green;
  margin-right: 10px;
`;

const SalePrice = styled.p`
  font-size: 15px;
  margin-top: 3px;
  text-decoration: line-through;
`;

const Origin = styled.p`
  font-size: 10px;
  margin: 15px 0;
`;

const Right = styled.div`
  width: 500px;
`;

const BtnState = styled.div`
  display: flex;
  justify-content: center;
`;

const BuyBtn = styled.button`
  border: 1px solid grey;
  border-radius: 20px;
  padding: 10px 24px;
  margin-right: 10px;
  background-color: #4c9c2e;
  color: white;
`;

const CartBtn = styled.button`
  padding: 5px 24px;
  border: 1px solid grey;
  border-radius: 20px;
  padding: 5px 24px;
  margin-right: 10px;
`;

const HartBtn = styled.button`
  border: 1px solid grey;
  border-radius: 20px;
  padding: 5px 24px;
`;
const NaverPay = styled.button`
  border: 1px solid grey;
  border-radius: 20px;
  padding: 10px 50px;
  background-color: #00c737;
`;

const Img = styled.img`
  width: 450px;
  margin-right: 100px;
`;

const SaleBtn = styled.button`
  background-color: red;
  color: white;
  border: 1px solid gray;
  margin: 10px 5px;
`;
const BestBtn = styled.button`
  background-color: white;
  color: red;
  border: 1px solid gray;
`;

const TotalSum = styled.div`
  margin: 50px 10px;
`;

const RightSide = styled.div`
  justify-content: center;
  margin-top: 130px;
  display: flex;
`;
const ButtomBtn = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 20px;
`;

const Title = styled.span`
  font-size: 20px;
`;
export default Product;
