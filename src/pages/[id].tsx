import Head from 'next/head';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import JobList from '../components/JobList';

const StyledContainer = styled.div<{ theme?: { colors: any } }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

const StyledHeader = styled.div<{ theme?: { colors: any } }>`
  display: flex;
  height: 80px;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
`;

const StyledContent = styled.div`
  width: 70%;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: calc(100vh - 80px);
`;

const StyledJobViewer = styled.div<{ theme?: { colors: any } }>`
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.primary};
  width: 70%;
`;

export default function Home({ jobs }) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <div>carregando</div>;
  }

  return (
    <StyledContainer>
      <Head>
        <title>Front Vagas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledHeader>
        <h1>Front Vagas</h1>
      </StyledHeader>
      <StyledContent>
        <JobList jobs={jobs} />
        <StyledJobViewer>Jobs Viewer</StyledJobViewer>
      </StyledContent>
    </StyledContainer>
  );
}

export const getStaticPaths = async () => {
  const apiResult = await fetch('https://api.github.com/repos/frontendbr/vagas/issues');
  const jobs = await apiResult.json();

  const paths = jobs.map(({ id }) => `/${id}`);

  return { paths, fallback: true };
};

export const getStaticProps = async () => {
  const apiResult = await fetch('https://api.github.com/repos/frontendbr/vagas/issues');
  const jobs = await apiResult.json();
  const revalidate = 3600;

  return {
    props: {
      jobs,
    },
    revalidate,
  };
};
