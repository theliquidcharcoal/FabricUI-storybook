import { Checkbox as FluentuiCheckBox, ICheckboxProps } from "@fluentui/react";
import { initializeIcons } from "@fluentui/react/lib/Icons";

initializeIcons();

export default function Checkbox({ ...props }: ICheckboxProps): JSX.Element {
  return <FluentuiCheckBox {...props} />;
}
