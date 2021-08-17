import {
  CompoundButton as FluentUiCompoundButton,
  IBaseButtonProps,
} from "@fluentui/react";

export const CompoundButton = ({ ...props }: IBaseButtonProps) => {
  return <FluentUiCompoundButton {...props} />;
};
