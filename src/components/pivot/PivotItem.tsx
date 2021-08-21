import {
  PivotItem as FluentuiPivotItem,
  IPivotItemProps,
} from "@fluentui/react";

export const PivotItem = ({ ...props }: IPivotItemProps) => {
  return <FluentuiPivotItem {...props} />;
};
