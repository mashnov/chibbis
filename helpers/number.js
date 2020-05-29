import numeral from 'numeral';

export const formatNumber = (value = 0, short = false) => {
  const number = numeral(value);
  const format = short ? '0,0 a' : '0,0';
  return number.format(format);
};
