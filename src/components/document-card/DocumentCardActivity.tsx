import {
  DocumentCardActivity as FluentuiDocumentCardActivity,
  IDocumentCardActivityProps,
} from "@fluentui/react";

export const DocumentCardActivity = ({
  ...props
}: IDocumentCardActivityProps) => {
  return <FluentuiDocumentCardActivity {...props} />;
};
