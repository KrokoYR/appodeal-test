import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

interface IDateFNSOptions {
  locale?: any;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  firstWeekContainsDate?: number;
  useAdditionalWeekYearTokens?: boolean;
  useAdditionalDayOfYearTokens?: boolean;
}

export const formatDate = (
  date: Date | number,
  formatString: string,
  options: IDateFNSOptions = {
    locale: ru
  }
) => {
  return format(date, formatString, options);
};
