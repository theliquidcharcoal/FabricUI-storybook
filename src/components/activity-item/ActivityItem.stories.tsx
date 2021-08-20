import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ActivityItem } from "./ActivityItem";

export default {
  title: "Components/ActivityItem",
  component: ActivityItem,
  argTypes: {
    boxSide: {
      control: { type: "radio", options: ["start", "end"] },
    },
    activityDescription: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof ActivityItem>;

const Template: ComponentStory<typeof ActivityItem> = (args) => (
  <ActivityItem {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  activityDescription: "Hello activity",
  timeStamp: "Yesterday",
  isCompact: false,
  beaconColorTwo: "red",
  beaconColorOne: "green",
  animateBeaconSignal: false,
};
