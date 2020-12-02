import { ReactElement } from 'react';
import { StyledLabel } from './styles';

interface Props {
  label: string;
}

const Label = ({ label }): ReactElement<Props> => {
  return <StyledLabel>{label}</StyledLabel>;
};

export default Label;
