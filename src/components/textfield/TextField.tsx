import {
  TextField as FluentuiTextField,
  ITextFieldProps,
} from "@fluentui/react";

export const TextField = ({ ...props }: ITextFieldProps) => {
  return <FluentuiTextField {...props} />;
};
