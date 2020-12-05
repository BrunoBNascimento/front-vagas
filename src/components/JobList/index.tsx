import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import JobListItem from '../JobListItem';
import { StyledJobsList } from './styles';

interface Props {
  title: string;
  id: string;
}

const JobList = ({ jobs }): ReactElement<Props> => {
  const { push } = useRouter();

  return (
    <StyledJobsList>
      {jobs.map((job, i) => (
        <JobListItem active={i === 0} key={job.id} job={job} onClick={() => push(`/${job.id}`)} />
      ))}
    </StyledJobsList>
  );
};

export default JobList;
