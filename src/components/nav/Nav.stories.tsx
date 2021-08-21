import { INavLinkGroup } from "@fluentui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Nav } from "./Nav";

export default {
  title: "Components/Nav",
  component: Nav,
  argTypes: {
    boxSide: {
      control: { type: "radio", options: ["start", "end"] },
    },
  },
} as ComponentMeta<typeof Nav>;

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: "Home",
        url: "http://example.com",
        expandAriaLabel: "Expand Home section",
        collapseAriaLabel: "Collapse Home section",
        links: [
          {
            name: "Activity",
            url: "http://msn.com",
            key: "key1",
            target: "_blank",
          },
          {
            name: "MSN",
            url: "http://msn.com",
            disabled: true,
            key: "key2",
            target: "_blank",
          },
        ],
        isExpanded: true,
      },
      {
        name: "Documents",
        url: "http://example.com",
        key: "key3",
        isExpanded: true,
        target: "_blank",
      },
      {
        name: "Pages",
        url: "http://msn.com",
        key: "key4",
        target: "_blank",
      },
      {
        name: "Notebook",
        url: "http://msn.com",
        key: "key5",
        disabled: true,
      },
      {
        name: "Communication and Media",
        url: "http://msn.com",
        key: "key6",
        target: "_blank",
      },
      {
        name: "News",
        url: "http://cnn.com",
        icon: "News",
        key: "key7",
        target: "_blank",
      },
    ],
  },
];

const Template: ComponentStory<typeof Nav> = (args) => (
  <div style={{ width: 200 }}>
    <Nav {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  selectedKey: "key3",
  ariaLabel: "Nav basic example",
  groups: navLinkGroups,
  isOnTop: false,
  selectedAriaLabel: "selectedAriaLabel",
};
