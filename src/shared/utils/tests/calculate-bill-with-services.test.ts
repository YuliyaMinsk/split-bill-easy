import { describe, it, expect } from 'vitest';

import { applyServices, calculateDishCosts } from '../calculate-bill-with-services';
import { testBillList, testDetailedTotals, testPayers, testServices } from './mock-data';

const countPayers = testPayers.length;

describe('calculateDishCosts', () => {
  it('should correctly calculate dish costs for each payer', () => {
    const result = calculateDishCosts(testPayers, testBillList);
    expect(result.length).toEqual(countPayers);
  });
});

describe('applyServices', () => {
  it('should correctly apply services to each payer', () => {
    const result = applyServices(testDetailedTotals, testServices);
    expect(result.length).toEqual(countPayers);
  });
});
