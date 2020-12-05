import { ReactElement } from 'react';
import Label from '../Label';
import { CardWrapper, LabelsWrapper } from './styles';

interface Job {
  active?: Boolean;
  onClick: () => void;
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

const JobListItem = ({ job, active, onClick }): ReactElement<Job> => {
  return (
    <CardWrapper onClick={onClick} active={active}>
      {job.title}
      <LabelsWrapper>
        {job.labels.map((label) => (
          <Label label={label.name} />
        ))}
      </LabelsWrapper>
    </CardWrapper>
  );
};

export default JobListItem;
