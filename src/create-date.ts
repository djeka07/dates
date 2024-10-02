import dayjs, { Dayjs } from 'dayjs';

const createDate = (date?: string | number | Date | Dayjs | null | undefined, format?: dayjs.OptionType): Dayjs => {
  return dayjs(date === null ? undefined : date, format);
};

export default createDate;
