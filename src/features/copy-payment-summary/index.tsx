import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const CopyPaymentSummary = (): JSX.Element => {
  const { t } = useTranslation();

  const handleCopy = () => {
    console.log('copy to clipboard');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1, ml: 2, mr: 2, mb: 4 }}>
      <Button size="large" variant="contained" sx={{ width: '100%', mr: 1 }} onClick={handleCopy}>
        {t('Copy to clipboard for everyone')}
      </Button>
    </Box>
  );
};

export { CopyPaymentSummary };
