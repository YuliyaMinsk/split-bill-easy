import { IconButton } from '@mui/material';
import { RemoveCircleOutline } from '@mui/icons-material';

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
