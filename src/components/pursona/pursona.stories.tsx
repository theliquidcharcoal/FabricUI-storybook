import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TestImages } from "@fluentui/example-data";
import { Persona } from "./pursona";
import { PersonaSize } from "@fluentui/react";

export default {
  title: "Components/Persona",
  component: Persona,
  argTypes: {},
} as ComponentMeta<typeof Persona>;

const Template: ComponentStory<typeof Persona> = (args) => (
  <Persona {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  imageUrl: TestImages.personaFemale,
  imageInitials: "AL",
  text: "Annie Lindqvist",
  secondaryText: "Software Engineer",
  tertiaryText: "In a meeting",
  optionalText: "Available at 4:00pm",
  size: PersonaSize.size32,
  hidePersonaDetails: false,
  imageAlt: "Annie Lindqvist, no presence detected",
};
