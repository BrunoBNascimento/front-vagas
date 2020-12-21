import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { useDarkMode } from '../../Providers/DarkModeProvider';
import JobListItem from '../JobListItem';
import Switch from '../Switch';
import { StyledJobsList, StyledOptionsWrapper } from './styles';

interface Props {
  title: string;
  id: string;
  activeId: string;
}

const JobList = ({ jobs, activeId }): ReactElement<Props> => {
  const { push } = useRouter();
  const { toggleDarkMode } = useDarkMode();

  const renderOptions = () => {
    return (
      <StyledOptionsWrapper>
        <p>Dark mode</p>
        <Switch onChange={toggleDarkMode} />
      </StyledOptionsWrapper>
    );
  };

  return (
    <StyledJobsList>
      {renderOptions()}
      {jobs.map((job) => {
        return (
          <JobListItem
            active={Number(activeId) === job.id}
            key={job.id}
            job={job}
            onClick={() => push(`/${job.id}`)}
          />
        );
      })}
    </StyledJobsList>
  );
};

export default JobList;
