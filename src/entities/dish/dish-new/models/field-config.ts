import { TFunction } from 'i18next';

type ConfigKeys = { label: string; placeholder: string; type: string };

type FieldConfigKeys = 'name' | 'price' | 'quantity';

const createFieldConfig = (
  t: TFunction,
): Record<FieldConfigKeys, { label: string; placeholder: string; type: string }> => ({
  name: {
    label: t('Item'),
    placeholder: t('Enter an item'),
    type: 'text',
  },
  price: {
    label: t('Item cost'),
    placeholder: t('Enter an item cost'),
    type: 'number',
  },
  quantity: {
    label: t('Quantity'),
    placeholder: t('Enter a quantity'),
    type: 'number',
  },
});

export { createFieldConfig };
export type { FieldConfigKeys, ConfigKeys };
