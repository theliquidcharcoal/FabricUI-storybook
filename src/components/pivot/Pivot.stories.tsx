import { Label } from "@fluentui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Pivot } from "./Pivot";
import { PivotItem } from "./PivotItem";

export default {
  title: "Components/Pivot",
  component: Pivot,
  argTypes: {
    overflowBehavior: {
      control: { type: "radio", options: ["menu", "none"] },
    },
  },
} as ComponentMeta<typeof Pivot>;

const Template: ComponentStory<typeof Pivot> = (args) => {
  return (
    <div>
      <Pivot {...args}>
        <PivotItem headerText="Foo">
          <Label>Pivot #1</Label>
        </PivotItem>
        <PivotItem headerText="Bar">
          <Label>Pivot #2</Label>
        </PivotItem>
        <PivotItem headerText="Bas">
          <Label>Pivot #3</Label>
        </PivotItem>
        <PivotItem headerText="Biz">
          <Label>Pivot #4</Label>
        </PivotItem>
      </Pivot>
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  "aria-label": "Links of Large Tabs Pivot Example",
  linkFormat: "tabs",
  linkSize: "large",
  headersOnly: false,
  overflowBehavior: "menu",
};
