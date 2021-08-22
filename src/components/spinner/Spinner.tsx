import { Spinner as FluentuiSpinner, ISpinnerProps } from "@fluentui/react";

export const Spinner = ({ ...props }: ISpinnerProps) => {
  return <FluentuiSpinner {...props} />;
};
