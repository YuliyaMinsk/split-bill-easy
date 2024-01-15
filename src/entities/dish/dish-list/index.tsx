import { Typography } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RootState } from '@/shared/store';
import { StyledBox } from '@/shared/styles';
import { roundUp } from '@/shared/utils';

import { Dish } from '../dish';

const DishList: FC = () => {
  const { t } = useTranslation();
  const billList = useSelector((state: RootState) => state.bill.billList);
  const currency = useSelector((state: RootState) => state.profile.currency);
  const total = billList.reduce((acc, bill) => acc + bill.dish.price * bill.dish.quantity, 0);

  if (billList.length === 0) {
    return (
      <StyledBox>
        <p>{t('There are no items in your bill. Fill the form below to add it')}</p>
      </StyledBox>
    );
  }

  return (
    <StyledBox sx={{ textAlign: 'initial' }}>
      {billList.map((bill) => (
        <Dish key={bill.dish.name + bill.dish.id} billLine={bill} />
      ))}
      <Typography variant="h5" sx={{ color: 'text.secondary', m: 1, textAlign: 'right' }}>
        {t('Total') + ':'} {roundUp(total, 2)} {currency}
      </Typography>
    </StyledBox>
  );
};

export { DishList };
