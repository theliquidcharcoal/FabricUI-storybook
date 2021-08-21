import { ContextualMenuItemType, IContextualMenuItem } from "@fluentui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { ContextualMenu } from "./ContextualMenu";

const menuItems: IContextualMenuItem[] = [
  {
    key: "newItem",
    text: "New",
    onClick: () => console.log("New clicked"),
  },
  {
    key: "divider_1",
    itemType: ContextualMenuItemType.Divider,
  },
  {
    key: "rename",
    text: "Rename",
    onClick: () => console.log("Rename clicked"),
  },
  {
    key: "edit",
    text: "Edit",
    onClick: () => console.log("Edit clicked"),
  },
  {
    key: "properties",
    text: "Properties",
    onClick: () => console.log("Properties clicked"),
  },
  {
    key: "linkNoTarget",
    text: "Link same window",
    href: "http://bing.com",
  },
  {
    key: "linkWithTarget",
    text: "Link new window",
    href: "http://bing.com",
    target: "_blank",
  },
  {
    key: "linkWithOnClick",
    name: "Link click",
    href: "http://bing.com",
    target: "_blank",
  },
  {
    key: "disabled",
    text: "Disabled item",
    disabled: true,
    onClick: () => console.error("Disabled item should not be clickable."),
  },
];

export default {
  title: "Components/ContextualMenu",
  component: ContextualMenu,
  argTypes: {
    boxSide: {
      control: { type: "radio", options: ["start", "end"] },
    },
  },
} as ComponentMeta<typeof ContextualMenu>;

const Template: ComponentStory<typeof ContextualMenu> = (args) => {
  const linkRef = React.useRef(null);
  const [showContextualMenu, setShowContextualMenu] = React.useState(
    args.hidden
  );

  React.useEffect(() => {
    setShowContextualMenu(args.hidden);
  }, [args.hidden]);

  const onShowContextualMenu = React.useCallback(
    (ev: React.MouseEvent<HTMLElement>) => {
      ev.preventDefault(); // don't navigate
      setShowContextualMenu(true);
    },
    []
  );
  const onHideContextualMenu = React.useCallback(
    () => setShowContextualMenu(false),
    []
  );

  return (
    <div>
      <p>
        This example directly uses ContextualMenu to show how it can be attached
        to arbitrary elements. The remaining examples use ContextualMenu through
        Fluent UI Button components.
      </p>
      <p>
        <b>
          <a ref={linkRef} onClick={onShowContextualMenu} href="#">
            Click for ContextualMenu
          </a>
        </b>
      </p>
      <ContextualMenu
        {...args}
        hidden={!showContextualMenu}
        target={linkRef}
        onItemClick={onHideContextualMenu}
        onDismiss={onHideContextualMenu}
      />
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  items: menuItems,
  hidden: true,
  alignTargetEdge: false,
  ariaLabel: "Aria Label",
  beakWidth: 100,
  coverTarget: false,
  delayUpdateFocusOnHover: false,
  directionalHintFixed: false,
  doNotLayer: false,
  isBeakVisible: false,
  title: "Basic",
};
