import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useBoolean } from "@fluentui/react-hooks";
import { DefaultButton } from "../button/DefaultButton";
import { Modal } from "./Modal";
import { ResponsiveMode } from "@fluentui/react";
import { useEffect } from "react";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    responsiveMode: {
      control: { type: "radio", options: [1, 2, 3, 4, 5] },
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(
    args.isOpen ? true : false
  );

  useEffect(() => {
    if (args.isOpen) {
      showModal();
    } else {
      hideModal();
    }
  }, [args.isOpen, showModal, hideModal]);

  return (
    <div>
      <DefaultButton onClick={showModal} text="Open Modal" />
      <Modal {...args} isOpen={isModalOpen} onDismiss={hideModal} />
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  children: "Modal content",
  titleAriaId: "title",
  isBlocking: false,
  allowTouchBodyScroll: false,
  enableAriaHiddenSiblings: false,
  isAlert: false,
  isDarkOverlay: false,
  isModeless: false,
  isOpen: false,
  topOffsetFixed: false,
  responsiveMode: ResponsiveMode.large,
};
