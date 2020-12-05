import styled from '@emotion/styled';

export const CardWrapper = styled.div<{ active: boolean; theme?: { colors: any } }>`
  ${({ active }) =>
    active &&
    `
      background-color: ${({ theme }) => theme.colors.intermediary};
    `}
  color: ${({ theme }) => theme.colors.secondary};
  padding: 20px;
`;

export const LabelsWrapper = styled.div<{ theme?: { colors: any } }>`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
`;
