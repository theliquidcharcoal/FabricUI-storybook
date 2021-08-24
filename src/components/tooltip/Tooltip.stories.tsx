import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DefaultButton } from "../button/DefaultButton";
import { TooltipHost } from "./Tooltip";

export default {
  title: "Components/Tooltip",
  component: TooltipHost,
  argTypes: {},
} as ComponentMeta<typeof TooltipHost>;

const Template: ComponentStory<typeof TooltipHost> = (args) => (
  <div>
    <TooltipHost {...args}>
      <DefaultButton aria-describedby={args.id}>Hover over me</DefaultButton>
    </TooltipHost>
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  content: "This is the tooltip content",
  id: "Info tooltip",
  calloutProps: { gapSpace: 0 },
};
