import { Dayjs } from 'dayjs';
import createDate from './create-date';

const formatDate = (date: string | number | Date | Dayjs | null | undefined, format = 'LLL') => {
  return createDate(date).format(format);
};

export default formatDate;
