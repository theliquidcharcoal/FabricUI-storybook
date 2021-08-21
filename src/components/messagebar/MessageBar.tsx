import {
  MessageBar as FluentuiMessageBar,
  IMessageBarProps,
} from "@fluentui/react";

export const MessageBar = ({ ...props }: IMessageBarProps) => {
  return <FluentuiMessageBar {...props} />;
};
