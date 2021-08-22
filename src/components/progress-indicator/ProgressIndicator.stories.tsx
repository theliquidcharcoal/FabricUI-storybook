import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProgressIndicator } from "./ProgressIndicator";

export default {
  title: "Components/ProgressIndicator",
  component: ProgressIndicator,
  argTypes: {},
} as ComponentMeta<typeof ProgressIndicator>;

const Template: ComponentStory<typeof ProgressIndicator> = (args) => (
  <ProgressIndicator {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  ariaValueText: "Completing..",
  barHeight: 2,
  description: "I am the description",
  label: "I ma the label",
  percentComplete: 30,
  progressHidden: false,
};
