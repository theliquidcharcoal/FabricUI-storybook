import { ComponentStory, ComponentMeta } from "@storybook/react";
import CheckBox from "./CheckBox";

export default {
  title: "Example/CheckBox",
  component: CheckBox,
  // argTypes: ICheckboxProps,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "CheckBox",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "CheckBox",
};

export const Large = Template.bind({});
Large.args = {
  label: "CheckBox",
};

export const Small = Template.bind({});
Small.args = {
  label: "CheckBox",
};
