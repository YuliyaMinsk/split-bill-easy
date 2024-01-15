import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { FC } from 'react';

interface SnackbarActionProps {
  handleClose: (_event: React.SyntheticEvent | Event, reason?: string) => void;
}

const SnackbarAction: FC<SnackbarActionProps> = ({ handleClose }) => {
  return (
    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
      <CloseIcon fontSize="small" />
    </IconButton>
  );
};

export { SnackbarAction };
