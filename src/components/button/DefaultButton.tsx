import {
  DefaultButton as FluentUiDefaultButton,
  IBaseButtonProps,
} from "@fluentui/react";

export const DefaultButton = ({ ...props }: IBaseButtonProps) => {
  return <FluentUiDefaultButton {...props} />;
};
