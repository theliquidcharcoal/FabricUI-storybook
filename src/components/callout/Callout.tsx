import { Callout as FluentuiCallout, ICalloutProps } from "@fluentui/react";

export const Callout = ({ ...props }: ICalloutProps) => {
  return <FluentuiCallout {...props} />;
};
