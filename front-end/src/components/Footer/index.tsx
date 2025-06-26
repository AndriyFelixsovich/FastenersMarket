import { FC } from 'react';
import Container from '@/components/Ui/Container';
import Logo from '@/components/Shared/Logo';
import styled from 'styled-components';
import styles from './index.module.scss';

const Footer:FC = () => {
  return (
    <StyledFooter>
      <Container>

       <FooterWrap>
        <Logo />
        <strong>© Fasteners Market</strong>
       </FooterWrap>
        
      </Container>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  margin: auto 0 0 0;
  padding: 1rem 0;
  background: #fffaf6;
`;

const FooterWrap = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  strong {
    font-size: 2.2rem;
  }
`;
