import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SwatchColorPicker } from "./SwitchColorPicker";

const colorCellsExample = [
  { id: "a", label: "orange", color: "#ca5010" },
  { id: "b", label: "cyan", color: "#038387" },
  { id: "c", label: "blueMagenta", color: "#8764b8" },
  { id: "d", label: "magenta", color: "#881798" },
  { id: "e", label: "white", color: "#ffffff" },
];

export default {
  title: "Components/SwatchColorPicker",
  component: SwatchColorPicker,
  argTypes: {
    cellShape: {
      control: { type: "radio", options: ["circle", "square"] },
    },
  },
} as ComponentMeta<typeof SwatchColorPicker>;

const Template: ComponentStory<typeof SwatchColorPicker> = (args) => (
  <SwatchColorPicker {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  columnCount: 5,
  cellHeight: 35,
  cellWidth: 35,
  cellShape: "square",
  colorCells: colorCellsExample,
  disabled: false,
  focusOnHover: false,
  shouldFocusCircularNavigate: false,
};
