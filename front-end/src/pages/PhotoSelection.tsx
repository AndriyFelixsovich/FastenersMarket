import { FC, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Container from '@/components/Ui/Container';

const PhotoSelection:FC = () => {
  return (
		<Container>
			<Title>Photo Selection</Title>

		</Container>
  );
}

export default PhotoSelection;

const Title = styled.h1 `
	text-align: center;
	margin: 1.5rem 0;
`;

