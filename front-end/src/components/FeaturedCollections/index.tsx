import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import CategoryItem from '@/components/CategoryItem';
import axios from 'axios';

interface MarkiAuto {
  name: string;
  id: number;
  slug: string;
}

interface ApiResponse {
  markaAutoAll: MarkiAuto[];
}

const FeaturedCollections:FC = () => {
  const [markiAuto, setMarkiAuto] = useState<MarkiAuto[]>([]);

  useEffect(() => {
    axios.get<ApiResponse>('https://fastenersmarket.local/api/v1/home')
      .then(response => {
        setMarkiAuto(response.data.markaAutoAll);
      })
      .catch(err => console.log(err));
  }, []);

  return (
		<>
      <Wrap>
        <Title>Featured Collections</Title>
        <Grid className="featured-collections"> 
          {
            markiAuto.map((autoMarka) => (
              <CategoryItem key={autoMarka.id} autoMarka={autoMarka} />
            ))
          }
        </Grid>
      </Wrap>
    </>
  );
}

export default FeaturedCollections;

const Wrap = styled.div`
  padding-top: 1.5rem;
  margin-bottom: 4rem;
`;

const Title = styled('h1')`
  font-weight: 500;
  margin: 1.5rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;