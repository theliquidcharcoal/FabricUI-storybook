import {
  SwatchColorPicker as FluentuiSwatchColorPicker,
  ISwatchColorPickerProps,
} from "@fluentui/react";

export const SwatchColorPicker = ({ ...props }: ISwatchColorPickerProps) => {
  return <FluentuiSwatchColorPicker {...props} />;
};
