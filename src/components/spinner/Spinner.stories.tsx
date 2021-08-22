import { SpinnerSize } from "@fluentui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Spinner } from "./Spinner";

export default {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: {
    ariaLive: {
      control: { type: "radio", options: ["assertive", "polite", "off"] },
    },
    labelPosition: {
      control: {
        type: "radio",
        options: ["top", "right", "bottom", "left"],
      },
    },
    size: {
      control: {
        type: "radio",
        options: [0, 1, 2, 3],
      },
    },
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  ariaLabel: "Product Loading..",
  ariaLive: "assertive",
  label: "Products",
  labelPosition: "top",
  size: SpinnerSize.medium,
};
