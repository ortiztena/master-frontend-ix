import * as React from 'react';
import Button from '@material-ui/core/Button';

interface Props {
  onClick: () => void;
}

export const ContainedButton: React.FC<Props> = props => {
  const { children, onClick } = props;

  return (
    <Button variant="contained" onClick={onClick}>
      {children}
    </Button>
  );
};

// interface Props { }

// export const TemplateComponent: React.FC<Props> = (props) => {
//   const { children } = props;

//   return <></>
// }
