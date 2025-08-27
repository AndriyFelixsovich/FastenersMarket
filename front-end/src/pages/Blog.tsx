import { FC, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Container from '@/components/Ui/Container';
import BlogPostItem from '@/components/BlogPostItem';

const Blog:FC = () => {
  return (
		<Container>
			<Title>Blog</Title>
			<BlogWrap>
				<BlogPostItem />
			</BlogWrap>
		</Container>
  );
}

export default Blog;

const Title = styled.h1 `
	text-align: center;
	margin: 1.5rem 0;
`;

const BlogWrap = styled.div `
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 1rem;
	margin: 1.5rem 0;
	padding-bottom: 2rem;
`;