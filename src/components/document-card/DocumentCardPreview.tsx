import {
  DocumentCardPreview as FluentuiDocumentCardPreview,
  IDocumentCardPreviewProps,
} from "@fluentui/react";

export const DocumentCardPreview = ({
  ...props
}: IDocumentCardPreviewProps) => {
  return <FluentuiDocumentCardPreview {...props} />;
};
