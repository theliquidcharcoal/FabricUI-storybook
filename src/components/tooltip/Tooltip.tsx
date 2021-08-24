import {
  TooltipHost as FluentuiTooltipHost,
  ITooltipHostProps,
} from "@fluentui/react";

export const TooltipHost = ({ ...props }: ITooltipHostProps) => {
  return <FluentuiTooltipHost {...props} />;
};
