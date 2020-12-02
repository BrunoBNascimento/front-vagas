import Head from 'next/head';
import styled from '@emotion/styled';
import JobList from '../components/JobList';

const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: #f3f2ef;
`;

const StyledHeader = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  background: white;
`;

const StyledContent = styled.div`
  width: 70%;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: calc(100vh - 80px);
`;

const StyledJobViewer = styled.div`
  background: white;
  width: 70%;
`;

export default function Home({ jobs }) {
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
