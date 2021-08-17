import {
  ChoiceGroup as FluentuiChoiceGroup,
  IChoiceGroupProps,
} from "@fluentui/react";

export const ChoiceGroup = ({ ...props }: IChoiceGroupProps) => {
  return <FluentuiChoiceGroup {...props} />;
};
