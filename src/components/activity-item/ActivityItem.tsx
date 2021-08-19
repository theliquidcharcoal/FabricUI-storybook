import {
  ActivityItem as FluentuiActivityItem,
  IActivityItemProps,
} from "@fluentui/react";

export const ActivityItem = ({ ...props }: IActivityItemProps) => {
  return <FluentuiActivityItem {...props} />;
};
