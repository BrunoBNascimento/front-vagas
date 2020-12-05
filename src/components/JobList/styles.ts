import styled from '@emotion/styled';

export const StyledJobsList = styled.div<{ theme?: { colors: any } }>`
  background: ${({ theme }) => theme.colors.primary};
  width: 30%;
  overflow-y: scroll;
`;
