import {
  IconButton as FluentUiIconButton,
  IBaseButtonProps,
} from "@fluentui/react";

export const IconButton = ({ ...props }: IBaseButtonProps) => {
  return <FluentUiIconButton {...props} />;
};
