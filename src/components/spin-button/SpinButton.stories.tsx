import { Position } from "@fluentui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SpinButton } from "./SpinButton";

export default {
  title: "Components/SpinButton",
  component: SpinButton,
  argTypes: {
    labelPosition: {
      control: { type: "radio", options: [0, 1, 2, 3] },
    },
  },
} as ComponentMeta<typeof SpinButton>;

const Template: ComponentStory<typeof SpinButton> = (args) => (
  <SpinButton {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  ariaDescribedBy: "Aria describe by",
  ariaLabel: "Aria label",
  ariaPositionInSet: 1,
  ariaSetSize: 1,
  ariaValueNow: 1,
  ariaValueText: "Aria value text",
  decrementButtonAriaLabel: "Decrement Button Aria Label",
  defaultValue: "0",
  disabled: false,
  incrementButtonAriaLabel: "Increment button aria label",
  label: "Label",
  labelPosition: Position.start,
  max: 10,
  min: 1,
  precision: 10,
  step: 10,
  title: "Hello",
  value: "0",
};
