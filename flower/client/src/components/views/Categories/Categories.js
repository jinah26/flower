import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import image from '../images/logo.png';

const categories = [
  {
    name: 'Bouquet',
    text: '꽃다발'
  },
  {
    name: 'Basket',
    text: '꽃바구니'
  },
  {
    name: 'DIY',
    text: 'DIY'
  },
  {
    name: 'Special',
    text: 'Special Day'
  },
  {
    name: 'Pollen',
    text: '화분'
  },
  {
    name: 'New',
    text: '구매'
  }
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 100px 0 0 0;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 100%) {
    width: 100%;
    overflow-x: auto;
    
  }
`;

const Category = styled(NavLink)`
  font-size: 1.5rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: gray;
  padding-bottom: 0.25rem;
  margin-right: 40px;
  margin-left: 40px;
  margin-top: 30px;
  

  &:hover {
    border-bottom: 4px solid #edc13b;
  }

  &.active {
    font-weight: 600;
    color: #edc13b;
    &:hover {
      color: #edc13b;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;
const Categories = ({ onSelect }) => {
  return (
    <CategoriesBlock>
        <div>
        <Link to='/'><img src={image}
        width='300px'
        height='100px'
        alt='test'
        margin-left='100px'
        /></Link>
        </div>
      {categories.map(c => (
        <Category
          key={c.name}
          activeClassName="active"
          exact={c.name === 'all'}
          to={c.name === 'all' ? '/' : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
