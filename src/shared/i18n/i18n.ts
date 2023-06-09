import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      'Split Bill Easy': 'Split Bill Easy',
      'Welcome to React': 'Welcome to React and react-i18next',

      // bottom navigation
      'Payers': 'Payers',
      'Items': 'Items',
      'Calculations': 'Calculations',

      // payers
      'Name': 'Name',
      'Enter a new name': 'Enter a new name',

      // items
      'Item': 'Item',
      'Enter an item': 'Enter an item',
      'Item cost': 'Item cost',
      'Enter an item cost': 'Enter an item cost',
      'Quantity': 'Quantity',
      'Enter a quantity': 'Enter a quantity',
      'Choose who bought this item': 'Choose who bought this item',
      'Save': 'Save',
      'Edit': 'Edit',
      'Delete': 'Delete',

      // error messages
      'Error: Incorrect amount': 'Error: Incorrect amount',
    },
  },
  rus: {
    translation: {
      'Split Bill Easy': 'Делите Счёт Легко!',
      'Welcome to React': 'Добро пожаловать в React и react-i18next',

      // bottom navigation
      'Payers': 'Платящие',
      'Items': 'Позиции',
      'Calculations': 'Подсчёты',

      // payers
      'Name': 'Имя',
      'Enter a new name': 'Введите новое имя',

      // items
      'Item': 'Позиция',
      'Enter an item': 'Введите позицию',
      'Item cost': 'Стоимость позиции',
      'Enter an item cost': 'Введите стоимость позиции',
      'Quantity': 'Количество',
      'Enter a quantity': 'Введите количество',
      'Choose who bought this item': 'Выберите кто купил эту позицию',
      'Save': 'Сохранить',
      'Edit': 'Редактировать',
      'Delete': 'Удалить',

      // error messages
      'Error: Incorrect amount': 'Ошибка: Некорректная сумма',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'rus', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export { i18n };
