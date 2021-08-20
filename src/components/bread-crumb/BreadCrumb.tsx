import {
  Breadcrumb as FluentuiBreadcrumb,
  IBreadcrumbProps,
} from "@fluentui/react";

export const Breadcrumb = ({ ...props }: IBreadcrumbProps) => {
  return <FluentuiBreadcrumb {...props} />;
};
