import { Panel as FluentuiPanel, IPanelProps } from "@fluentui/react";

export const Panel = ({ ...props }: IPanelProps) => {
  return <FluentuiPanel {...props} />;
};
