import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IMG from '@/components/Ui/Img';

const BlogPostItem:FC = () => {
  return (
		<Item>
       <IMG width={100} height={100} src="src/assets/images/home-img.webp" />
       <Title to="/">Post</Title>
       <Description>Descr</Description>
       <Data>Data</Data>
    </Item>
  );
}

export default BlogPostItem;

const Item = styled.div `
  padding: .7rem;
  border: 2px solid var(--light-grey);
`;

const Title = styled(Link) `
	color: var(--honolulu-blue);
  text-decoration: none;
  font-weight: 600;
`;

const Description = styled.p `
	color: var(--sonic-silver);
`;

const Data = styled.span `
  display: block;
  text-align: right;
	color: var(--dark-cerulean);
`;