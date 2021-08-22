import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useBoolean } from "@fluentui/react-hooks";
import { DefaultButton } from "../button/DefaultButton";
import { Panel } from "./Panel";
import React from "react";
import { PanelType } from "@fluentui/react";

export default {
  title: "Components/Panel",
  component: Panel,
  argTypes: {
    type: {
      control: { type: "radio", options: [0, 1, 2, 3, 4, 5, 6, 7] },
    },
  },
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = (args) => {
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(
    args.isOpen ? true : false
  );

  React.useEffect(() => {
    if (args.isOpen) {
      openPanel();
    } else {
      dismissPanel();
    }
  }, [args.isOpen, dismissPanel, openPanel]);

  return (
    <div>
      <DefaultButton text="Open panel" onClick={openPanel} />
      <Panel {...args} isOpen={isOpen} onDismiss={dismissPanel}>
        <p>Content goes here.</p>
      </Panel>
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  headerText: "Sample panel",
  isOpen: false,
  closeButtonAriaLabel: "Close",
  allowTouchBodyScroll: false,
  customWidth: "50%",
  forceFocusInsideTrap: false,
  hasCloseButton: true,
  ignoreExternalFocusing: false,
  isBlocking: true,
  isFooterAtBottom: false,
  isHiddenOnDismiss: false,
  isLightDismiss: false,
  type: PanelType.large,
};
