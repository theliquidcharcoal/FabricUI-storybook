import { Dialog as FluentuiDialog, IDialogProps } from "@fluentui/react";

export const Dialog = ({ ...props }: IDialogProps) => {
  return <FluentuiDialog {...props} />;
};
