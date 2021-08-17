import { ComboBox as FluentuiComboBox, IComboBoxProps } from "@fluentui/react";

export const ComboBox = ({ ...props }: IComboBoxProps) => {
  return <FluentuiComboBox {...props} />;
};
