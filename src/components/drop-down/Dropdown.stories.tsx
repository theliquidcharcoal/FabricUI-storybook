import {
  DropdownMenuItemType,
  IDropdownOption,
  IDropdownStyles,
} from "@fluentui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dropdown } from "./Dropdown";

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};

const options: IDropdownOption[] = [
  {
    key: "fruitsHeader",
    text: "Fruits",
    itemType: DropdownMenuItemType.Header,
  },
  { key: "apple", text: "Apple" },
  { key: "banana", text: "Banana" },
  { key: "orange", text: "Orange", disabled: true },
  { key: "grape", text: "Grape" },
  { key: "divider_1", text: "-", itemType: DropdownMenuItemType.Divider },
  {
    key: "vegetablesHeader",
    text: "Vegetables",
    itemType: DropdownMenuItemType.Header,
  },
  { key: "broccoli", text: "Broccoli" },
  { key: "carrot", text: "Carrot" },
  { key: "lettuce", text: "Lettuce" },
];

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    boxSide: {
      control: { type: "radio", options: ["start", "end"] },
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  placeholder: "Select an option",
  label: "Basic uncontrolled example",
  errorMessage: "",
  disabled: false,
  multiSelect: false,
  options: options,
  styles: dropdownStyles,
};
