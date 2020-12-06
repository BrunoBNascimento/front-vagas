import styled from '@emotion/styled';

export const StyledTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const CardWrapper = styled.div<{ active: boolean; theme?: { colors: any } }>`
  color: ${({ theme }) => theme.colors.secondary};
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.intermediary};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.intermediary};
  }

  ${({ active, theme }) =>
    active &&
    `
    background-color: ${theme.colors.intermediary};
  `}
`;

export const LabelsWrapper = styled.div<{ theme?: { colors: any } }>`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
`;
