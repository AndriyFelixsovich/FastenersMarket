import { FC } from 'react';
import Container from '@/components/Ui/Container';
import styled from 'styled-components';

const Footer:FC = () => {
  return (
    <StyledFooter>
      <Container>
        <h2>Footer</h2>
        
      </Container>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  margin: auto 0 0 0;
`;
