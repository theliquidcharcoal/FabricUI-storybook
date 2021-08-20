import { IBreadcrumbItem } from "@fluentui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Breadcrumb } from "./BreadCrumb";

const items: IBreadcrumbItem[] = [
  { text: "Files", key: "Files" },
  { text: "Folder 1", key: "f1" },
  { text: "Folder 2", key: "f2" },
  { text: "Folder 3", key: "f3" },
  { text: "Folder 4 (non-clickable)", key: "f4" },
  { text: "Folder 5", key: "f5" },
  { text: "Folder 6", key: "f6" },
  { text: "Folder 7", key: "f7" },
  { text: "Folder 8", key: "f8" },
  { text: "Folder 9", key: "f9" },
  { text: "Folder 10", key: "f10" },
  {
    text: "Folder 11",
    key: "f11",
    isCurrentItem: true,
  },
];

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    boxSide: {
      control: { type: "radio", options: ["start", "end"] },
    },
  },
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  items,
  maxDisplayedItems: 4,
  overflowAriaLabel: "overflow",
  overflowIndex: 2,
};
