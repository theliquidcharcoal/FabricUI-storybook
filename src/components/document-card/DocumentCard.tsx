import {
  DocumentCard as FluentuiDocumentCard,
  IDocumentCardProps,
} from "@fluentui/react";

export const DocumentCard = ({ ...props }: IDocumentCardProps) => {
  return <FluentuiDocumentCard {...props} />;
};
