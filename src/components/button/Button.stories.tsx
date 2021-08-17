import { IContextualMenuProps } from "@fluentui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CommandBarButton } from "./CommandBarButton";
import { CompoundButton } from "./CompoundButton";
import { DefaultButton } from "./DefaultButton";
import { IconButton } from "./IconButton";
import { PrimaryButton } from "./PrimaryButton";

export default {
  title: "Example/Button",
  component: DefaultButton,
} as ComponentMeta<typeof DefaultButton>;

const menuProps: IContextualMenuProps = {
  items: [
    {
      key: "emailMessage",
      text: "Email message",
      iconProps: { iconName: "Mail" },
    },
    {
      key: "calendarEvent",
      text: "Calendar event",
      iconProps: { iconName: "Calendar" },
    },
  ],
};

export const Default: ComponentStory<typeof DefaultButton> = (args) => (
  <DefaultButton {...args}>Default Button</DefaultButton>
);
Default.args = {
  checked: false,
  disabled: false,
  primary: true,
};

export const Primary: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args}>Primary Button</PrimaryButton>
);
Primary.args = {
  checked: false,
  disabled: false,
};

export const Compound: ComponentStory<typeof CompoundButton> = (args) => (
  <CompoundButton {...args}>Compound Button</CompoundButton>
);
Compound.args = {
  checked: false,
  primary: true,
  disabled: false,
};

export const CommandBar: ComponentStory<typeof CommandBarButton> = (args) => (
  <div style={{ height: 44 }}>
    <CommandBarButton {...args}>Command Bar Button</CommandBarButton>
  </div>
);
CommandBar.args = {
  checked: false,
  menuProps,
  disabled: false,
  iconProps: {
    iconName: "Add",
  },
};

export const Icon: ComponentStory<typeof IconButton> = (args) => (
  <div style={{ height: 44 }}>
    <IconButton {...args} />
  </div>
);
Icon.args = {
  checked: false,
  disabled: false,
  title: "Emoji",
  ariaLabel: "Emoji",
  iconProps: { iconName: "Emoji2" },
};
