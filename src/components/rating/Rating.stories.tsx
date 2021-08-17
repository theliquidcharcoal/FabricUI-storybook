import { RatingSize } from "@fluentui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Rating } from "./Rating";

export default {
  title: "Components/Rating",
  component: Rating,
  argTypes: {
    size: {
      control: { type: "radio", options: [0, 1] },
    },
  },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  max: 5,
  size: RatingSize.Large,
  defaultRating: 3,
  ariaLabel: "Large stars",
  ariaLabelFormat: "{0} of {1} stars",
  icon: "StarburstSolid",
  unselectedIcon: "Starburst",
};
