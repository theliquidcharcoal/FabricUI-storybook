import {
  CommandBar as FluentuiCommandBar,
  ICommandBarProps,
} from "@fluentui/react";

export const CommandBar = ({ ...props }: ICommandBarProps) => {
  return <FluentuiCommandBar {...props} />;
};
