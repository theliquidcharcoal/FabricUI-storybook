import { Rating as FluentuiRating, IRatingProps } from "@fluentui/react";

export const Rating = ({ ...props }: IRatingProps) => {
  return <FluentuiRating {...props} />;
};
