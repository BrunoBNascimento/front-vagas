import { ReactElement } from 'react';
import { SliderStyled, SwitchStyled, SwitchWrapper } from './styles';

interface Props {
  onChange: () => void;
}

const Switch = ({ onChange }): ReactElement<Props> => {
  return (
    <SwitchWrapper>
      <SwitchStyled>
        <input type="checkbox" onChange={onChange} />
        <SliderStyled className="slider round" />
      </SwitchStyled>
    </SwitchWrapper>
  );
};

export default Switch;
