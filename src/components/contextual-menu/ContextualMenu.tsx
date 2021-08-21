import {
  ContextualMenu as FluentuiContextualMenu,
  IContextualMenuProps,
} from "@fluentui/react";

export const ContextualMenu = ({ ...props }: IContextualMenuProps) => {
  return <FluentuiContextualMenu {...props} />;
};
