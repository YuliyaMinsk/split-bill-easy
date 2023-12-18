import { RemoveCircleOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';

type RemovePayerProps = {
  onRemove: () => void;
};

const RemovePayer = ({ onRemove }: RemovePayerProps): JSX.Element => {
  return (
    <IconButton aria-label="remove" onClick={() => onRemove()}>
      <RemoveCircleOutline />
    </IconButton>
  );
};

export { RemovePayer };
