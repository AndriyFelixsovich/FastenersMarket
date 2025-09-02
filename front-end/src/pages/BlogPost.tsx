import { FC, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Container from '@/components/Ui/Container';

const BlogPost:FC = () => {
  return (
		<Container>
			<Title>Post</Title>
			
		</Container>
  );
}

export default BlogPost;

const Title = styled.h1 `
	text-align: center;
	margin: 1.5rem 0;
`;
