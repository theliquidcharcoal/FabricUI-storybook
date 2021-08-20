import { List as FluentuiList, IListProps } from "@fluentui/react";

export const List = ({ ...props }: IListProps) => {
  return <FluentuiList {...props} />;
};
