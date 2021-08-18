import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Toggle } from "./toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    role: {
      control: {
        type: "radio",
        options: ["checkbox", "switch", "menuitemcheckbox"],
      },
    },
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ariaLabel: "Basic toggle",
  checked: false,
  defaultChecked: false,
  disabled: false,
  inlineLabel: false,
  label: "Basic toggle",
  offText: "Off Text",
  onAriaLabel: "On Aria Label",
  offAriaLabel: "Off Aria Label",
  onText: "On Text",
  role: "checkbox",
};
