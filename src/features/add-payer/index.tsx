import { AddCircleOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { FC } from 'react';

interface AddPayerProps {
  onAdd: (event: React.MouseEvent) => void;
}

const AddPayer: FC<AddPayerProps> = ({ onAdd }) => {
  return (
    <IconButton aria-label="add" onClick={onAdd}>
      <AddCircleOutline />
    </IconButton>
  );
};

export { AddPayer };
