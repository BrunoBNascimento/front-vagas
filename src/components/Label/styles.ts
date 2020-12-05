import styled from '@emotion/styled';

export const StyledLabel = styled.div<{ theme?: { colors: any } }>`
  min-width: 80px;
  font-size: 12px;
  padding: 2px 5px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;
