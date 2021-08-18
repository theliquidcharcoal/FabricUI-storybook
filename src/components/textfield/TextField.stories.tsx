import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextField } from "./TextField";

export default {
  title: "Components/TextField",
  component: TextField,
  argTypes: {},
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <div style={{ width: 300 }}>
    <TextField {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  label: "Basic",
  autoAdjustHeight: false,
  autoComplete: "yea",
  borderless: false,
  canRevealPassword: false,
  deferredValidationTime: 200,
  multiline: false,
  description: "I am the description",
  errorMessage: "",
  prefix: "hello",
  readOnly: false,
  resizable: false,
  suffix: "coll",
  underlined: false,
  validateOnFocusIn: false,
  validateOnFocusOut: false,
  validateOnLoad: false,
  value: "yea",
};
