import { ShimmerElementType } from "@fluentui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Shimmer } from "./Shimmer";

const shimmerWithElementThirdRow = [
  { type: ShimmerElementType.circle, height: 24 },
  { type: ShimmerElementType.gap, width: "2%" },
  { type: ShimmerElementType.line, height: 16, width: "20%" },
  { type: ShimmerElementType.gap, width: "5%" },
  { type: ShimmerElementType.line, height: 16, width: "20%" },
  { type: ShimmerElementType.gap, width: "10%" },
  { type: ShimmerElementType.line, height: 16, width: "15%" },
  { type: ShimmerElementType.gap, width: "10%" },
  { type: ShimmerElementType.line, height: 16 },
];

export default {
  title: "Components/Shimmer",
  component: Shimmer,
  argTypes: {},
} as ComponentMeta<typeof Shimmer>;

const Template: ComponentStory<typeof Shimmer> = (args) => (
  <Shimmer {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  ariaLabel: "Basic shimmer",
  isDataLoaded: false,
  width: "70%",
  shimmerElements: shimmerWithElementThirdRow,
};
