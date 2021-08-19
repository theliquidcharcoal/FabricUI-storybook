import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DatePicker } from "./DatePicker";

export default {
  title: "Components/DatePcker",
  component: DatePicker,
  argTypes: {},
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <div style={{ maxWidth: 300 }}>
    <DatePicker {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  label: "Basic",
  allFocusable: false,
  allowTextInput: false,
  ariaLabel: "Aria label",
  borderless: false,
  disableAutoFocus: true,
  highlightCurrentMonth: false,
  highlightSelectedMonth: false,
  initialPickerDate: new Date(),
  isMonthPickerVisible: true,
  isRequired: false,
  openOnClick: true,
  placeholder: "Place holder",
  showCloseButton: true,
  showGoToToday: false,
  showMonthPickerAsOverlay: false,
  showWeekNumbers: false,
  tabIndex: 0,
  underlined: false,
};
