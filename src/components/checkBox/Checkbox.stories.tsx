import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "./Checkbox";

export default {
  title: "Example/CheckBox",
  component: Checkbox,
  argTypes: {
    boxSide: {
      control: { type: "radio", options: ["start", "end"] },
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  label: "Basic",
  checked: false,
  indeterminate: false,
  boxSide: "start",
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Checked",
  checked: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  label: "Indeterminate",
  indeterminate: true,
};

export const BoxSide = Template.bind({});
BoxSide.args = {
  label: "Box Side",
  boxSide: "start",
};
