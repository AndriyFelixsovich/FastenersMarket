import { FC, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Container from '@/components/Ui/Container';

const CategorySelection:FC = () => {
  return (
		<Container>
			<Title>Category Selection</Title>

		</Container>
  );
}

export default CategorySelection;

const Title = styled.h1 `
	text-align: center;
	margin: 1.5rem 0;
`;
