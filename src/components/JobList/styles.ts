import styled from '@emotion/styled';

export const StyledJobsList = styled.div<{ theme?: { colors: any } }>`
  background: ${({ theme }) => theme.colors.primary};
  width: 40%;
  overflow-y: scroll;
`;

export const StyledOptionsWrapper = styled.div<{ theme?: { colors: any } }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.secondary};
`;
