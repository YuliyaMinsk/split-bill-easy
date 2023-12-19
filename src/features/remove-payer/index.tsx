import { RemoveCircleOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { FC } from 'react';

type RemovePayerProps = {
  onRemove: () => void;
};

const RemovePayer: FC<RemovePayerProps> = ({ onRemove }) => {
  return (
    <IconButton aria-label="remove" onClick={() => onRemove()}>
      <RemoveCircleOutline />
    </IconButton>
  );
};

export { RemovePayer };
