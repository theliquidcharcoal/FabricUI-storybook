import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NormalPeoplePicker } from "./NormalPeoplePicker";

export default {
  title: "Components/PeoplePicker",
  component: NormalPeoplePicker,
  argTypes: {},
  parameters: { actions: { argTypesRegex: "^on.*" } },
} as ComponentMeta<typeof NormalPeoplePicker>;

export const Normal: ComponentStory<typeof NormalPeoplePicker> = (args) => (
  <div style={{ width: 300 }}>
    <NormalPeoplePicker {...args} />
  </div>
);
Normal.args = {
  resolveDelay: 300,
  disabled: false,
};
