import numeral from 'numeral';

const ruLocale = {
  delimiters: {
    thousands: ' ',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'тыс.',
    million: 'млн.',
    billion: 'млрд.',
    trillion: 'трлн.',
  },
  ordinal() {
    return '.';
  },
  currency: {
    symbol: '\u20BD',
  },
};

numeral.register('locale', 'ru-Ru', ruLocale);
numeral.locale('ru-Ru');

export const formatNumber = (value = 0, short = false) => {
  const number = numeral(value);
  const format = short ? '0,0 a' : '0,0';
  return number.format(format);
};
