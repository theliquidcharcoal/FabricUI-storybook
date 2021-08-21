import {
  IButtonStyles,
  IOverflowSetItemProps,
  Link,
  OverflowSet,
} from "@fluentui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IconButton } from "../button/IconButton";

export default {
  title: "Components/OverflowSet",
  component: OverflowSet,
  argTypes: {
    overflowSide: {
      control: { type: "radio", options: ["start", "end"] },
    },
  },
} as ComponentMeta<typeof OverflowSet>;

const Template: ComponentStory<typeof OverflowSet> = (args) => (
  <OverflowSet {...args} />
);

const noOp = () => undefined;

const onRenderItem = (item: IOverflowSetItemProps): JSX.Element => {
  return (
    <Link
      role="menuitem"
      styles={{ root: { marginRight: 10 } }}
      onClick={item.onClick}
    >
      {item.name}
    </Link>
  );
};

const onRenderOverflowButton = (
  overflowItems: any[] | undefined
): JSX.Element => {
  const buttonStyles: Partial<IButtonStyles> = {
    root: {
      minWidth: 0,
      padding: "0 4px",
      alignSelf: "stretch",
      height: "auto",
    },
  };
  return (
    <IconButton
      role="menuitem"
      title="More options"
      styles={buttonStyles}
      menuIconProps={{ iconName: "More" }}
      menuProps={{ items: overflowItems! }}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  role: "menubar",
  items: [
    {
      key: "item1",
      name: "Link 1",
      onClick: noOp,
    },
    {
      key: "item2",
      name: "Link 2",
      onClick: noOp,
    },
    {
      key: "item3",
      name: "Link 3",
      onClick: noOp,
    },
  ],
  overflowItems: [
    {
      key: "item4",
      name: "Overflow Link 1",
      onClick: noOp,
    },
    {
      key: "item5",
      name: "Overflow Link 2",
      onClick: noOp,
    },
  ],
  onRenderOverflowButton: onRenderOverflowButton,
  onRenderItem: onRenderItem,
  overflowSide: "start",
  vertical: false,
};
