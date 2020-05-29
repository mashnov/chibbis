import { DateTime } from 'luxon';
import { format, register } from 'timeago.js';
import russian from 'timeago.js/lib/lang/ru';

const LANGUAGE_NAME = 'Russian';
register(LANGUAGE_NAME, russian);

export const getFormattedDate = (isoString, formatString = 'dd.MM.yyyy HH:mm') => {
  return isoString ? DateTime.fromISO(isoString).toFormat(formatString) : '';
};

export const getTimeAgo = (isoString) => {
  return isoString ? format(isoString, LANGUAGE_NAME) : '';
};
