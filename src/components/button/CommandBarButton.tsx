import {
  CommandBarButton as FluentUiCommandBarButton,
  IBaseButtonProps,
} from "@fluentui/react";

export const CommandBarButton = ({ ...props }: IBaseButtonProps) => {
  return <FluentUiCommandBarButton {...props} />;
};
