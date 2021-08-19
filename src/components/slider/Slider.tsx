import { Slider as FluentuiSlider, ISliderProps } from "@fluentui/react";

export const Slider = ({ ...props }: ISliderProps) => {
  return <FluentuiSlider {...props} />;
};
