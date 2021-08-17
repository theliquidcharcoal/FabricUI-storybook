import { IComboBoxOption, SelectableOptionMenuItemType } from "@fluentui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ComboBox } from "./ComboBox";

const options: IComboBoxOption[] = [
  {
    key: "Header1",
    text: "First heading",
    itemType: SelectableOptionMenuItemType.Header,
  },
  { key: "A", text: "Option A" },
  { key: "B", text: "Option B" },
  { key: "C", text: "Option C" },
  { key: "D", text: "Option D" },
  { key: "divider", text: "-", itemType: SelectableOptionMenuItemType.Divider },
  {
    key: "Header2",
    text: "Second heading",
    itemType: SelectableOptionMenuItemType.Header,
  },
  { key: "E", text: "Option E" },
  { key: "F", text: "Option F", disabled: true },
  { key: "G", text: "Option G" },
  { key: "H", text: "Option H" },
  { key: "I", text: "Option I" },
  { key: "J", text: "Option J" },
];

export default {
  title: "Components/ComboBox",
  component: ComboBox,
  argTypes: {
    boxSide: {
      control: { type: "radio", options: ["start", "end"] },
    },
  },
} as ComponentMeta<typeof ComboBox>;

const Template: ComponentStory<typeof ComboBox> = (args) => (
  <div style={{ maxWidth: 300 }}>
    <ComboBox {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  defaultSelectedKey: "C",
  label: "Basic single-select ComboBox",
  options: options,
  multiSelect: false,
};
