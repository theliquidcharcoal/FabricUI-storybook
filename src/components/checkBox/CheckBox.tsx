import { Checkbox as FluentuiCheckBox, ICheckboxProps } from "@fluentui/react";

export const Checkbox = ({ ...props }: ICheckboxProps) => {
  return <FluentuiCheckBox {...props} />;
};
