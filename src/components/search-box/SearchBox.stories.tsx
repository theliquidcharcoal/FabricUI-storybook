import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SearchBox } from "./SearchBox";

export default {
  title: "Components/SearchBox",
  component: SearchBox,
  argTypes: {
    boxSide: {
      control: { type: "radio", options: ["start", "end"] },
    },
  },
} as ComponentMeta<typeof SearchBox>;

const Template: ComponentStory<typeof SearchBox> = (args) => (
  <div style={{ width: 400 }}>
    <SearchBox {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  ariaLabel: "Aria lable",
  defaultValue: "Hello",
  disableAnimation: false,
  labelText: "Label",
  placeholder: "Placeholder",
  role: "role",
  showIcon: false,
  underlined: false,
  value: "Hello",
};
