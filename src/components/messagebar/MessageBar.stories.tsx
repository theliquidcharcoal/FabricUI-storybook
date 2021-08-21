import { MessageBarType } from "@fluentui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MessageBar } from "./MessageBar";

export default {
  title: "Components/MessageBar",
  component: MessageBar,
  argTypes: {
    role: {
      control: { type: "radio", options: ["alert", "status", "none"] },
    },
    messageBarType: {
      control: { type: "radio", options: [0, 1, 2, 3, 4, 5] },
    },
  },
} as ComponentMeta<typeof MessageBar>;

const Template: ComponentStory<typeof MessageBar> = (args) => (
  <MessageBar {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  ariaLabel: "ariaLabel",
  delayedRender: false,
  dismissButtonAriaLabel: "dismissButtonAriaLabel",
  isMultiline: true,
  overflowButtonAriaLabel: "overflowButtonAriaLabel",
  role: "none",
  truncated: false,
  messageBarType: MessageBarType.info,
  children: "Yea, what up",
};
