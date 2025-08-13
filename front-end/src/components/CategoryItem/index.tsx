import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IMG from '@/components/Ui/Img';

interface Marka {
  name: string;
  id: number;
  slug: string;
}

interface CategoryItemProps {
  autoMarka: Marka;
}

const CategoryItem: FC<CategoryItemProps> = ({ autoMarka }) => {
  return (
    <CategoryItemStyled>
      <TitleLink to={autoMarka.slug}>
        <IMG width={100} height={100} src="src/assets/images/home-img.webp" />
      </TitleLink>
      <TitleLink to={autoMarka.slug}>{autoMarka.name}</TitleLink>
    </CategoryItemStyled>
  );
};

export default CategoryItem;

const CategoryItemStyled = styled.div`
  background-color: #fff;
  box-shadow: 10px 10px 14px 2px rgba(0,0,0,0.75);
  border-radius: 10px;
  padding: 20px;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    box-shadow: 13px 13px 17px 2px rgba(0,0,0,0.75);
  }
`;

const TitleLink = styled(Link)`
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: var(--black);
  display: block;
  font-size: 1.2rem;
  margin-top: .7rem;
  text-transform: capitalize;
`;
