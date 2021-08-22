import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DefaultButton } from "../button/DefaultButton";
import { Dialog } from "./Dialog";
import { useId, useBoolean } from "@fluentui/react-hooks";
import { ContextualMenu, DialogFooter, DialogType } from "@fluentui/react";
import { PrimaryButton } from "../button/PrimaryButton";
import { useEffect } from "react";

const dragOptions = {
  moveMenuItemText: "Move",
  closeMenuItemText: "Close",
  menu: ContextualMenu,
  keepInBounds: true,
};
const dialogContentProps = {
  type: DialogType.normal,
  title: "Missing Subject",
  closeButtonAriaLabel: "Close",
  subText: "Do you want to send this message without a subject?",
};

export default {
  title: "Components/Dialog",
  component: Dialog,
  argTypes: {},
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => {
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(
    args.hidden ? true : false
  );

  useEffect(() => {
    toggleHideDialog();
  }, [args.hidden, toggleHideDialog]);

  return (
    <>
      <DefaultButton
        secondaryText="Opens the Sample Dialog"
        onClick={toggleHideDialog}
        text="Open Dialog"
      />

      <Dialog {...args} hidden={hideDialog} onDismiss={toggleHideDialog}>
        <DialogFooter>
          <PrimaryButton onClick={toggleHideDialog} text="Send" />
          <DefaultButton onClick={toggleHideDialog} text="Don't send" />
        </DialogFooter>
      </Dialog>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  ariaDescribedById: "Basic dialog",
  hidden: true,
  dialogContentProps: dialogContentProps,
  isBlocking: false,
  isDarkOverlay: false,
  maxWidth: 300,
  minWidth: 200,
  subText: "Sub Text",
  title: "Title",
};
