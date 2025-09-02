import { FC } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Container from '@/components/Ui/Container';
import Logo from '@/components/Ui/Logo';

const Footer:FC = () => {

  const pages = [
    {path: 'about', title: 'About us'},
    {path: 'contacts', title: 'Contact Us'},
    {path: 'blog', title: 'Blog'},
    {path: 'privacy-policy', title: 'Privacy Policy'},
    {path: 'return-refund-policy', title: 'Return & Refund Policy'},
    {path: 'shipping-policy', title: 'Shipping Policy'},
    {path: 'service', title: 'Terms of Service'},
  ]

  return (
    <StyledFooter>
      <Container>

      <FooterLineTop>
        <Logo />
        <div className='col-1'>
          <Title>Customer Service</Title>
          {
            pages.map((page, index) => (
              <LinkStyled key={page.title + index} to={page.path}>{page.title}</LinkStyled>
            ))
          }
        </div>
       </FooterLineTop>
     

       <FooterLineBottom>
        <strong>2025 © Fasteners Market</strong>
       </FooterLineBottom>
        
      </Container>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  margin: auto 0 0 0;
  padding: 1rem 0;
  background: #d5d5d5;
`;

const Title = styled.h3`
  font-weight: 500;
`;

const LinkStyled = styled(Link)`
  display: block;
  text-decoration: none;
  font-weight: 500;
  color: #000;
  margin: .7rem 0;
`;

const FooterLineTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterLineBottom = styled.div`
  strong {
    display: block;
    margin: 1rem 0;
    text-align: center;
    font-size: 1.5rem;
  }
`;
