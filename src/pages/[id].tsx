import Head from 'next/head';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import JobList from '../components/JobList';
import removeHtmlFromMarkdown from '../helpers/removeHtmlFromMarkdown';
import {
  StyledContainer,
  StyledContent,
  StyledHeader,
  StyledJobViewer,
  StyledTitle,
} from '../styles';

const getJobById = (id, jobs = []) => {
  const [result] = jobs.filter((job) => job.id === Number(id));

  return result?.body;
};

export default function Home({ jobs }) {
  const {
    isFallback,
    query: { id },
  } = useRouter();
  const currentJob = getJobById(id, jobs);

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
        <StyledTitle>Front Vagas</StyledTitle>
      </StyledHeader>
      <StyledContent>
        <JobList jobs={jobs} activeId={id} />
        <StyledJobViewer>
          <ReactMarkdown>{removeHtmlFromMarkdown(currentJob)}</ReactMarkdown>
        </StyledJobViewer>
      </StyledContent>
    </StyledContainer>
  );
}

export const getStaticPaths = async () => {
  const { GITHUB_DEVELOPER_TOKEN } = process.env;
  const apiResult = await fetch('https://api.github.com/repos/frontendbr/vagas/issues', {
    headers: {
      Authorization: `Bearer ${GITHUB_DEVELOPER_TOKEN}`,
    },
  });
  const jobs = await apiResult.json();

  const paths = jobs.map(({ id }) => `/${id}`);

  return { paths, fallback: true };
};

export const getStaticProps = async () => {
  const { GITHUB_DEVELOPER_TOKEN } = process.env;
  const apiResult = await fetch('https://api.github.com/repos/frontendbr/vagas/issues', {
    headers: {
      Authorization: `Bearer ${GITHUB_DEVELOPER_TOKEN}`,
    },
  });
  const jobs = await apiResult.json();
  const revalidate = 3600;

  return {
    props: {
      jobs,
    },
    revalidate,
  };
};
