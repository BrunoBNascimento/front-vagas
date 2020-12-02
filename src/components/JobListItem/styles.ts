import styled from '@emotion/styled';

export const CardWrapper = styled.div<{ active: boolean }>`
  ${({ active }) =>
    active &&
    `
      background-color: #EEEEEE;
    `}
  padding: 20px;
`;

export const LabelsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
`;
