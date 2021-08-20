import { ComponentStory, ComponentMeta } from "@storybook/react";
import { createListItems, IExampleItem } from "@fluentui/example-data";
import { List } from "./BasicList";
import { FocusZone, getTheme, ITheme, mergeStyleSets } from "@fluentui/react";

const theme: ITheme = getTheme();
const { palette, fonts } = theme;
const classNames = mergeStyleSets({
  listGridExample: {
    overflow: "hidden",
    fontSize: 0,
    position: "relative",
  },
  listGridExampleTile: {
    textAlign: "center",
    outline: "none",
    position: "relative",
    float: "left",
    background: palette.neutralLighter,
    selectors: {
      "focus:after": {
        content: "",
        position: "absolute",
        left: 2,
        right: 2,
        top: 2,
        bottom: 2,
        boxSizing: "border-box",
        border: `1px solid ${palette.white}`,
      },
    },
  },
  listGridExampleSizer: {
    paddingBottom: "100%",
  },
  listGridExamplePadder: {
    position: "absolute",
    left: 2,
    top: 2,
    right: 2,
    bottom: 2,
  },
  listGridExampleLabel: {
    background: "rgba(0, 0, 0, 0.3)",
    color: "#FFFFFF",
    position: "absolute",
    padding: 10,
    bottom: 0,
    left: 0,
    width: "100%",
    fontSize: fonts.small.fontSize,
    boxSizing: "border-box",
  },
  listGridExampleImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
  },
});

export default {
  title: "Components/List",
  component: List,
  argTypes: {},
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => (
  <FocusZone>
    <List {...args} />
  </FocusZone>
);

export const Basic = Template.bind({});
Basic.args = {
  items: createListItems(20),
  getItemCountForPage: () => {
    return 3;
  },
  getPageHeight: () => {
    return 100;
  },
  renderedWindowsAhead: 4,
  onRenderCell: (item: IExampleItem, index: number | undefined) => {
    return (
      <div
        className={classNames.listGridExampleTile}
        data-is-focusable
        style={{
          width: 100 / 3 + "%",
        }}
      >
        <div className={classNames.listGridExampleSizer}>
          <div className={classNames.listGridExamplePadder}>
            <img
              src={item.thumbnail}
              className={classNames.listGridExampleImage}
              alt="hello"
            />
            <span
              className={classNames.listGridExampleLabel}
            >{`item ${index}`}</span>
          </div>
        </div>
      </div>
    );
  },
};
