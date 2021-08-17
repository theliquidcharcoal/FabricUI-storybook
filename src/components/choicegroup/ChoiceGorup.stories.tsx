import { IChoiceGroupOption } from "@fluentui/react";
import { TestImages } from "@fluentui/example-data";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ChoiceGroup } from "./ChoiceGorup";

export default {
  title: "Components/ChoiceGroup",
  component: ChoiceGroup,
  argTypes: {},
} as ComponentMeta<typeof ChoiceGroup>;

const basicOptions: IChoiceGroupOption[] = [
  { key: "A", text: "Option A" },
  { key: "B", text: "Option B" },
  { key: "C", text: "Option C", disabled: true },
  { key: "D", text: "Option D" },
];

const imageOptions: IChoiceGroupOption[] = [
  {
    key: "bar",
    imageSrc: TestImages.choiceGroupBarUnselected,
    imageAlt: "Bar chart icon",
    selectedImageSrc: TestImages.choiceGroupBarSelected,
    imageSize: { width: 32, height: 32 },
    text: "Clustered bar chart", // This text is long to show text wrapping.
  },
  {
    key: "pie",
    imageSrc: TestImages.choiceGroupBarUnselected,
    selectedImageSrc: TestImages.choiceGroupBarSelected,
    imageSize: { width: 32, height: 32 },
    text: "Pie chart",
  },
];

const Template: ComponentStory<typeof ChoiceGroup> = (args) => (
  <ChoiceGroup {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  label: "Basic",
  checked: false,
  options: basicOptions,
  defaultSelectedKey: "B",
};

export const ImageOptions = Template.bind({});
ImageOptions.args = {
  label: "Basic",
  checked: false,
  options: imageOptions,
  defaultSelectedKey: "bar",
};
