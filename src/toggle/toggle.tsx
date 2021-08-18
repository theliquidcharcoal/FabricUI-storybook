import { Toggle as FluentuiToggle, IToggleProps } from "@fluentui/react";

export const Toggle = ({ ...props }: IToggleProps) => {
  return <FluentuiToggle {...props} />;
};
