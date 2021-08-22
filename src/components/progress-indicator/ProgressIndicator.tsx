import {
  ProgressIndicator as FluentuiProgressIndicator,
  IProgressIndicatorProps,
} from "@fluentui/react";

export const ProgressIndicator = ({ ...props }: IProgressIndicatorProps) => {
  return <FluentuiProgressIndicator {...props} />;
};
