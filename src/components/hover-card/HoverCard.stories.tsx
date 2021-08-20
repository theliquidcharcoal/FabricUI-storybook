import { HoverCardType, IPlainCardProps } from "@fluentui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DefaultButton } from "../button/DefaultButton";
import { HoverCard } from "./HoverCard";

export default {
  title: "Components/HoverCard",
  component: HoverCard,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["PlainCard", "ExpandingCard"],
      },
    },
  },
} as ComponentMeta<typeof HoverCard>;

const onRenderPlainCard = (): JSX.Element => {
  return (
    <div>
      <DefaultButton
        // eslint-disable-next-line react/jsx-no-bind

        text="Instant Dismiss"
      />
    </div>
  );
};
const plainCardProps: IPlainCardProps = {
  onRenderPlainCard: onRenderPlainCard,
};

const Template: ComponentStory<typeof HoverCard> = (args) => (
  <HoverCard {...args} plainCardProps={plainCardProps}>
    <span>Hover Over Me</span>
  </HoverCard>
);

export const Basic = Template.bind({});
Basic.args = {
  cardDismissDelay: 2000,
  type: HoverCardType.plain,
};
