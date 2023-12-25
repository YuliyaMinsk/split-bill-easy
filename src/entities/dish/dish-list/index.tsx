import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RootState } from '@/shared/store';

import { Dish } from '../dish';

const StyledBox = styled(Box)`
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const DishList: FC = () => {
  const { t } = useTranslation();
  const billList = useSelector((state: RootState) => state.bill.billList);

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
    </StyledBox>
  );
};

export { DishList };
