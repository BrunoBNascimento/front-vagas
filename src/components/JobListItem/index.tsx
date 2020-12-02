import { ReactElement } from 'react';
import Label from '../Label';
import { CardWrapper, LabelsWrapper } from './styles';

interface Job {
  active?: Boolean;
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

const JobListItem = ({ job, active }): ReactElement<Job> => {
  return (
    <CardWrapper active={active}>
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
