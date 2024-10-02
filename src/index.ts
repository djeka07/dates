import dayjs from 'dayjs';

import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjsIsToday from 'dayjs/plugin/isToday';
import dayjsIsYesterDay from 'dayjs/plugin/isYesterday';

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);
dayjs.extend(dayjsIsToday);
dayjs.extend(dayjsIsYesterDay);

export { default as createDate } from './create-date';
export { default as formatDate } from './format-date';
export { default as isBefore } from './is-before';
