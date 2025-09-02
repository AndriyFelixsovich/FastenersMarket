import { FC } from 'react';
import styled from 'styled-components';

const Checkbox:FC = ({ ...props }) => {
  return (
    <CheckboxStyled {...props} type="checkbox" />
  );
}

export default Checkbox;

const CheckboxStyled = styled.input`
	cursor: pointer;
`;