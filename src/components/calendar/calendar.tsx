import { Calendar as FluentuiCalendar, ICalendarProps } from "@fluentui/react";

export const Calendar = ({ ...props }: ICalendarProps) => {
  return <FluentuiCalendar {...props} />;
};
