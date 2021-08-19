import {
  DatePicker as FluentuiDatePicker,
  IDatePickerProps,
} from "@fluentui/react";

export const DatePicker = ({ ...props }: IDatePickerProps) => {
  return <FluentuiDatePicker {...props} />;
};
