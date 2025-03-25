import dayjs from 'dayjs';

export const of = (date?: dayjs.ConfigType) => dayjs(date);
export const format = (pattern: string) => (date: dayjs.ConfigType) => dayjs(date).format(pattern);
export const getYear = (date: dayjs.ConfigType) => dayjs(date).year();
