import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DefaultButton } from "../button/DefaultButton";
import { TeachingBubble } from "./TeachingBubble";

export default {
  title: "Components/TeachingBubble",
  component: TeachingBubble,
  argTypes: {
    boxSide: {
      control: { type: "radio", options: ["start", "end"] },
    },
  },
} as ComponentMeta<typeof TeachingBubble>;

const Template: ComponentStory<typeof TeachingBubble> = (args) => (
  <div>
    {" "}
    <DefaultButton id="targetButton" text={"Coll"} />
    <TeachingBubble {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  target: "#targetButton",
  primaryButtonProps: {
    children: "Try it out",
  },
  secondaryButtonProps: {
    children: "Maybe later",
  },
  headline: "Discover what’s trending around you",
  ariaDescribedBy: "ariaDescribedBy",
  ariaLabelledBy: "ariaLabelledBy",
  hasCloseButton: false,
  hasCloseIcon: false,
  hasCondensedHeadline: false,
  hasSmallHeadline: false,
  isWide: false,
};
