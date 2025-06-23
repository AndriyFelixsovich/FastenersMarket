import React, { FC } from 'react';
import styled from 'styled-components';

interface IProps {
  children?: React.ReactNode;  
  htmlFor: string | number;
  value?: string | number;     
}

const Label: FC<IProps> = ({ children, htmlFor, value, ...rest }) => {
  return (
    <LabelStyled htmlFor={String(htmlFor)} {...rest}>
      {children ?? value}
    </LabelStyled>
  );
};

export default Label;

const LabelStyled = styled.label`
  width: fit-content;
  display: flex;
  align-items: center;
  font-size: 0.938rem;
  font-weight: 700;
  cursor: pointer;
`;
