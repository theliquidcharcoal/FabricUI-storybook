import {
  HoverCard as FluentuiHoverCard,
  IHoverCardProps,
} from "@fluentui/react";

export const HoverCard = ({ ...props }: IHoverCardProps) => {
  return <FluentuiHoverCard {...props} />;
};
