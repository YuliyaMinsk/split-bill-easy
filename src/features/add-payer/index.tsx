import { AddCircleOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';

type AddPayerProps = {
  onAdd: (event: React.MouseEvent) => void;
};

const AddPayer = ({ onAdd }: AddPayerProps): JSX.Element => {
  return (
    <IconButton aria-label="add" onClick={onAdd}>
      <AddCircleOutline />
    </IconButton>
  );
};

export { AddPayer };
