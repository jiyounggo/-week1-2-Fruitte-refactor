import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { get } from '../../api/api';
import Tab from '../Categorize/Tab';
import Product from './Product';

function ProductDetail() {
  let [items, setItems] = useState([]);
  let { id } = useParams();

  const getData = async () => {
    const res = await get();
    setItems(res.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <Product items={items[id]} />
      <Tab />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 900px;
`;

export default ProductDetail;
