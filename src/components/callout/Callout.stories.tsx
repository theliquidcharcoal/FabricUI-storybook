import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useBoolean, useId } from "@fluentui/react-hooks";
import { Callout } from "./Callout";
import { DefaultButton } from "../button/DefaultButton";
import { Link, Text } from "@fluentui/react";

export default {
  title: "Components/Callout",
  component: Callout,
  argTypes: {
    boxSide: {
      control: { type: "radio", options: ["start", "end"] },
    },
  },
} as ComponentMeta<typeof Callout>;

const Template: ComponentStory<typeof Callout> = (args) => {
  const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] = useBoolean(
    false
  );
  const buttonId = useId("callout-button");
  const labelId = useId("callout-label");
  const descriptionId = useId("callout-description");

  return (
    <>
      <DefaultButton
        id={buttonId}
        onClick={toggleIsCalloutVisible}
        text={isCalloutVisible ? "Hide callout" : "Show callout"}
      />
      {isCalloutVisible && (
        <Callout
          {...args}
          target={`#${buttonId}`}
          onDismiss={toggleIsCalloutVisible}
          style={{ padding: 10 }}
        >
          <Text block variant="xLarge" id={labelId}>
            Callout title here
          </Text>
          <Text block variant="small" id={descriptionId}>
            Message body is optional. If help documentation is available,
            consider adding a link to learn more at the bottom.
          </Text>
          <Link href="http://microsoft.com" target="_blank">
            Sample link
          </Link>
        </Callout>
      )}
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  ariaDescribedBy: "Callout description",
  "aria-labelledby": "callout label",
  backgroundColor: "#fff",
  beakWidth: 16,
  calloutMaxHeight: 300,
  calloutMaxWidth: 400,
  calloutMinWidth: 200,
  calloutWidth: 300,
  coverTarget: false,
  directionalHintFixed: false,
  dismissOnTargetClick: false,
  doNotLayer: false,
  finalHeight: 300,
  gapSpace: 20,
  hidden: false,
  hideOverflow: false,
  isBeakVisible: false,
  minPagePadding: 8,
  role: "alert",
  setInitialFocus: false,
  shouldDismissOnWindowFocus: false,
  shouldUpdateWhenHidden: false,
};
