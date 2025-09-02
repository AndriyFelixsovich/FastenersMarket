import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IMG from '@/components/Ui/Img';

const BlogPostItem:FC = () => {
  return (
		<Item>
       <Title to="/">
        <IMG width={100} height={100} src="src/assets/images/home-img.webp" />
       </Title>
       <Title to="/">Lorem ipsum dolor sit amet.</Title>
       <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quosLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quosLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quosLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quosLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos</Description>
       <Data>09.09.2025</Data>
    </Item>
  );
}

export default BlogPostItem;

const Item = styled.div `
  padding: .7rem;
  border: 2px solid #ccc;
`;

const Title = styled(Link) `
  display: block;
  margin: .7rem 0;
  font-size: 1.5rem;
	color: #1C274C;
  text-decoration: none;
  font-weight: 600;
`;

const Description = styled.p `
	color: #000;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;

const Data = styled.span `
  display: block;
  text-align: right;
	color: #000;
  font-size: .9rem
`;