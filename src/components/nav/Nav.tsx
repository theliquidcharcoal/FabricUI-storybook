import { Nav as FluentuiNav, INavProps } from "@fluentui/react";

export const Nav = ({ ...props }: INavProps) => {
  return <FluentuiNav {...props} />;
};
