import {
  PrimaryButton as FluentUiPrimaryButton,
  IBaseButtonProps,
} from "@fluentui/react";

export const PrimaryButton = ({ ...props }: IBaseButtonProps) => {
  return <FluentUiPrimaryButton {...props} />;
};
