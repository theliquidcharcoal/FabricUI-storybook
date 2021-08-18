import { DateRangeType } from "@fluentui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Calendar } from "./calendar";

export default {
  title: "Components/Calendar",
  component: Calendar,
  argTypes: {
    dateRangeType: {
      control: { type: "radio", options: [0, 1, 2, 3] },
    },
  },
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => (
  <Calendar {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  showGoToToday: false,
  showMonthPickerAsOverlay: true,
  highlightSelectedMonth: true,
  dateRangeType: DateRangeType.Week,
  showWeekNumbers: false,
  showSixWeeksByDefault: false,
  showCloseButton: false,
  value: new Date(),
  allFocusable: false,
};
