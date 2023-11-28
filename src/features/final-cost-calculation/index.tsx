import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const FinalCostCalculator = (): JSX.Element => {
  const { t } = useTranslation();

  const handleCalculate = () => {
    console.log('calculate');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1, ml: 2, mr: 2, mb: 1 }}>
      <Button size="large" variant="contained" sx={{ width: '100%', mr: 1 }} onClick={handleCalculate}>
        {t('Calculate after extra charges')}
      </Button>
    </Box>
  );
};

export { FinalCostCalculator };
