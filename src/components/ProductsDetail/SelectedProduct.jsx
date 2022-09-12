import React from 'react';
import styled from 'styled-components';

function SelectedProduct({ items, selectOption, setSelectOption }) {
  const selectHandler = e => {
    const selectProduct = e.target.value;
    const findProduct = items.salesList.find(item => item.title === selectProduct);

    //중복제거
    let dupValue = selectOption.findIndex(a => {
      return a.index === findProduct.index;
    });

    {
      dupValue === -1
        ? setSelectOption([...selectOption, findProduct])
        : alert('이미선택된 옵션 입니다');
    }
  };

  return (
    <SelectBoxWrapper>
      <Select onChange={selectHandler}>
        <option value="none" disabled selected>
          선택하시오
        </option>
        {items?.salesList.map(option => (
          <option value={option.title} key={option.index}>
            {option.title}
            {option.price}
          </option>
        ))}
      </Select>
      <IconSVG xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#A1A1A1"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.045 3.955L10.136 8.052 6.045 12.136"
          transform="rotate(90 7.91 8.045)"
        />
      </IconSVG>
    </SelectBoxWrapper>
  );
}

const SelectBoxWrapper = styled.div`
  display: flex;
`;

const IconSVG = styled.svg`
  margin-left: -28px;
  margin-bottom: 20px;
  align-self: center;
  width: 24px;
  height: 30px;
`;
const Select = styled.select`
  margin: 0;
  min-width: 0;
  display: block;
  width: 100%;
  padding: 8px 8px;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid;
  border-radius: 4px;
  color: inherit;
  background-color: transparent;
  margin-bottom: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    border-color: red;
  }
`;

export default SelectedProduct;
