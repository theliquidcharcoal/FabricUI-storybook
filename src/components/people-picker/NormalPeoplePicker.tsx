import {
  NormalPeoplePicker as FluentuiNormalPeoplePicker,
  IPeoplePickerProps,
} from "@fluentui/react";

export const NormalPeoplePicker = ({ ...props }: IPeoplePickerProps) => {
  return <FluentuiNormalPeoplePicker {...props} />;
};
