import { Modal as FluentuiModal, IModalProps } from "@fluentui/react";

export const Modal = ({ ...props }: IModalProps) => {
  return <FluentuiModal {...props} />;
};
