import styled from '@emotion/styled';

export const StyledTitle = styled.h1<{ theme?: { colors: any } }>`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledContainer = styled.div<{ theme?: { colors: any } }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StyledHeader = styled.div<{ theme?: { colors: any } }>`
  display: flex;
  height: 80px;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
`;

export const StyledContent = styled.div`
  width: 80%;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: calc(100vh - 80px);
`;

export const StyledJobViewer = styled.div<{ theme?: { colors: any } }>`
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.primary};
  width: 70%;
  overflow-y: scroll;
  padding: 20px;
`;
