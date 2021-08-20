import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Facepile } from "./Facepile";
import { facepilePersonas } from "@fluentui/example-data";
import { IFacepilePersona } from "@fluentui/react";

const personas = facepilePersonas as IFacepilePersona[];

export default {
  title: "Components/Facepile",
  component: Facepile,
  argTypes: {
    boxSide: {
      control: { type: "radio", options: ["start", "end"] },
    },
  },
} as ComponentMeta<typeof Facepile>;

const Template: ComponentStory<typeof Facepile> = (args) => (
  <Facepile {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  personas: personas,
  ariaDescription: "Aria description",
  ariaLabel: "Aria Label",
  maxDisplayablePersonas: 4,
  showAddButton: false,
  showTooltip: true,
};
