import { ReactElement } from 'react';
import Label from '../Label';
import { CardWrapper, LabelsWrapper, StyledTitle } from './styles';

interface Job {
  active?: Boolean;
  onClick?: () => void;
  job: {
    title: string;
    id: string;
    label: {
      id: string;
      url: string;
      name: string;
      color: string;
      default: Boolean;
      description: string;
    };
  };
}

const truncateText = (text, length) => {
  return text.slice(0, length).concat('...');
};

const JobListItem = ({ job, active, onClick }): ReactElement<Job> => {
  return (
    <CardWrapper onClick={onClick} active={active}>
      <StyledTitle>{truncateText(job.title, 30)}</StyledTitle>
      <LabelsWrapper>
        {job.labels.map((label) => (
          <Label key={label.node_id} label={label.name} />
        ))}
      </LabelsWrapper>
    </CardWrapper>
  );
};

export default JobListItem;
