import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { useBoolean } from "@fluentui/react-hooks";
import { DefaultButton } from "../button/DefaultButton";
import { Coachmark } from "./Coachmark";

export default {
  title: "Components/Coachmark",
  component: Coachmark,
  argTypes: {
    boxSide: {
      control: { type: "radio", options: ["start", "end"] },
    },
  },
} as ComponentMeta<typeof Coachmark>;

const Template: ComponentStory<typeof Coachmark> = (args) => {
  const targetButton = React.useRef<HTMLDivElement>(null);
  const [isCoachmarkVisible, { setTrue: showCoachmark }] = useBoolean(false);

  return (
    <>
      <div ref={targetButton}>
        <DefaultButton
          onClick={showCoachmark}
          text={isCoachmarkVisible ? "Hide coachmark" : "Show coachmark"}
        />
      </div>
      {isCoachmarkVisible && (
        <Coachmark target={targetButton.current} {...args}>
          <div style={{ height: 200, padding: 20, color: "#fff" }}>
            <h1>Hello form coachmark</h1>
          </div>
        </Coachmark>
      )}
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  ariaAlertText: "A coachmark has appeared",
  ariaDescribedBy: "coachmark-desc1",
  ariaLabelledBy: "coachmark-label1",
  ariaDescribedByText:
    "Press enter or alt + C to open the coachmark notification",
  ariaLabelledByText: "Coachmark notification",
  preventFocusOnMount: false,
  preventDismissOnLostFocus: false,
  persistentBeak: false,
  mouseProximityOffset: 10,
  isPositionForced: true,
  isCollapsed: true,
  color: "red",
};
