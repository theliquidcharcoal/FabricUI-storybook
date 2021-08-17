import { Link as FluentuiLink, ILinkProps } from "@fluentui/react";

export const Link = ({ ...props }: ILinkProps) => {
  return <FluentuiLink {...props} />;
};
