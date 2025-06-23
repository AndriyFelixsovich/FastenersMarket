import { FC } from 'react';
import styled from 'styled-components';

interface IProps {
  ariaLabel?: string
}

const Checkbox:FC<IProps> = ({ ariaLabel = 'checkbox', ...props }) => {
  return (
    <CheckboxStyled {...props} type="checkbox" aria-label={ariaLabel} />
  );
}

export default Checkbox;

const CheckboxStyled = styled.input`
	cursor: pointer;
`;