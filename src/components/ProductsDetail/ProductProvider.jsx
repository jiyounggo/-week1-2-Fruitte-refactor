import React from 'react';

function ProductProvider({ product, selectOption, setSelectOption }) {
  //수량증가 / 감소
  const onCountHandler = e => {
    const copiedList = [...selectOption];
    let updatedData = copiedList.filter(item => item.title === e.currentTarget.value)[0];

    if (e.target.textContent === '+') {
      updatedData = { ...updatedData, quantity: updatedData.quantity + 1 };
    } else {
      updatedData = { ...updatedData, quantity: updatedData.quantity - 1 };
    }
    setSelectOption(
      copiedList.map(item => (item.index === updatedData.index ? updatedData : item))
    );
  };
  //삭제
  const onDeleteHandler = e => {
    const copiedList = [...selectOption];
    let updatedData = copiedList.filter(item => item.title !== e.currentTarget.value);
    setSelectOption(updatedData);
  };
  return (
    <div>
      <button
        disabled={product.quantity === 1 ? true : false}
        value={product.title}
        onClick={onCountHandler}
      >
        -
      </button>
      {product.quantity}
      <button value={product.title} onClick={onCountHandler}>
        +
      </button>
      {product.title} {product.price}원
      <button value={product.title} onClick={onDeleteHandler}>
        x
      </button>
    </div>
  );
}

export default ProductProvider;
