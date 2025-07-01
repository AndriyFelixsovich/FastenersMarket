import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CategoryItem from '@/components/CategoryItem';

const FeaturedCollections:FC = () => {
  return (
		<>
      <Wrap>
        <Title>Featured Collections</Title>
        <Grid className="featured-collections">
          <CategoryItem />
        </Grid>
      </Wrap>
    </>
  );
}

export default FeaturedCollections;

const Wrap = styled.div`
  padding: 1.5rem 0;
`;

const Title = styled('h1')`
  font-weight: 500;
  margin: 1.5rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;