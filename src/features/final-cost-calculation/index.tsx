import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const FinalCostCalculator = (): JSX.Element => {
  const { t } = useTranslation();

  const handleCalculate = () => {
    console.log('calculate');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: 1 }}>
      <Button size="large" variant="contained" sx={{ mr: 1 }} onClick={handleCalculate}>
        {t('Calculate after extra charges')}
      </Button>
    </Box>
  );
};

export { FinalCostCalculator };
