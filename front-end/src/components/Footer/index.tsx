import { FC } from 'react';
import Container from '@/components/Ui/Container';
import Logo from '@/components/Shared/Logo';
import styled from 'styled-components';
import styles from './index.module.scss';

const Footer:FC = () => {
  return (
    <StyledFooter>
      <Container>

        <h3>Fasteners Market</h3>
        <Logo />
        
      </Container>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  margin: auto 0 0 0;
  background: #fffaf6;
`;
