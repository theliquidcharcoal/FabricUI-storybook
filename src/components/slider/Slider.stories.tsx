import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Slider } from "./Slider";

export default {
  title: "Components/Slider",
  component: Slider,
  argTypes: {},
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => (
  <div style={{ width: 300, height: 300 }}>
    <Slider {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  ariaLabel: "Aria label",
  disabled: false,
  label: "Hello",
  lowerValue: 10,
  min: 1,
  max: 200,
  originFromZero: false,
  ranged: false,
  showValue: true,
  snapToStep: false,
  step: 1,
  vertical: false,
  style: { height: "100%" },
};
