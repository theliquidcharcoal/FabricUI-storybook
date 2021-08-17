import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Link } from "./Link";

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  disabled: false,
  href: "https://developer.microsoft.com/en-us/fluentui#/controls/web/link",
  underline: false,
  children: "I am a link",
};
