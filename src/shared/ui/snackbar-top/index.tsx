import { Snackbar } from '@mui/material';
import { FC } from 'react';

import { SnackbarAction } from './snackbar-action';

interface SnackbarTopProps {
  open: boolean;
  handleClose: (_event: React.SyntheticEvent | Event, reason?: string) => void;
  message: string;
}

const SnackbarTop: FC<SnackbarTopProps> = ({ open, handleClose, message }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      autoHideDuration={3000}
      message={message}
      action={<SnackbarAction handleClose={handleClose} />}
      onClose={handleClose}
      sx={{
        top: '70px !important',
      }}
    />
  );
};

export { SnackbarTop };
