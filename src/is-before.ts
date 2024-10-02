import createDate from './create-date';
import { Dayjs } from 'dayjs';

const isBefore = (
  date: string | number | Date | Dayjs | null | undefined,
  dateToCompare?: string | number | Date | Dayjs | null | undefined,
): boolean => {
  return createDate(dateToCompare).isBefore(date);
};

export default isBefore;
