import { IconButton } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';

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
