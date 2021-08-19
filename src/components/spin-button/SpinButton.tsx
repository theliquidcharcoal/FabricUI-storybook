import {
  SpinButton as FluentuiSpinButton,
  ISpinButtonProps,
} from "@fluentui/react";

export const SpinButton = ({ ...props }: ISpinButtonProps) => {
  return <FluentuiSpinButton {...props} />;
};
