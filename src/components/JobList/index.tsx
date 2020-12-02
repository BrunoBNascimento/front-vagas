import { ReactElement } from 'react';
import JobListItem from '../JobListItem';
import { StyledJobsList } from './styles';

interface Props {
  title: string;
  id: string;
}

const JobList = ({ jobs }): ReactElement<Props> => {
  return (
    <StyledJobsList>
      {jobs.map((job, i) => (
        <JobListItem active={i === 0} key={job.id} job={job} />
      ))}
    </StyledJobsList>
  );
};

export default JobList;
