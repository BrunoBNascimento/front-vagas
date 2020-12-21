import styled from '@emotion/styled';

export const SliderStyled = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: '';
    height: 17px;
    width: 17px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  &.round {
    border-radius: 34px;
  }

  &.round:before {
    border-radius: 50%;
  }
`;

export const SwitchStyled = styled.label<{ theme?: { colors: any } }>`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + span {
    background-color: ${({ theme }) => theme.colors.switch};
  }

  input:focus + span {
    box-shadow: 0 0 1px ${({ theme }) => theme.colors.switch};
  }

  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

export const SwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
