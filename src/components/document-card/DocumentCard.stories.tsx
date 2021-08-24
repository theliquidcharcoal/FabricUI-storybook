import {
  DocumentCardActivity,
  IDocumentCardPreviewProps,
  ImageFit,
} from "@fluentui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TestImages } from "@fluentui/example-data";
import { DocumentCard } from "./DocumentCard";
import { DocumentCardPreview } from "./DocumentCardPreview";
import { DocumentCardTitle } from "./DocumentCardTitle";

export default {
  title: "Components/DocumentCard",
  component: DocumentCard,
  argTypes: {
    type: {
      control: { type: "radio", options: [0, 1] },
    },
  },
} as ComponentMeta<typeof DocumentCard>;

const DocumentCardActivityPeople = [
  { name: "Annie Lindqvist", profileImageSrc: TestImages.personaFemale },
];

const previewProps: IDocumentCardPreviewProps = {
  previewImages: [
    {
      name: "Revenue stream proposal fiscal year 2016 version02.pptx",
      linkProps: {
        href: "http://bing.com",
        target: "_blank",
      },
      previewImageSrc: TestImages.documentPreview,
      iconSrc: TestImages.iconPpt,
      imageFit: ImageFit.cover,
      width: 318,
      height: 196,
    },
  ],
};

const Template: ComponentStory<typeof DocumentCard> = (args) => (
  <DocumentCard {...args}>
    <DocumentCardPreview {...previewProps} />
    <DocumentCardTitle
      title={
        "Large_file_name_with_underscores_used_to_separate_all_of_the_words_and_there_are_so_many_words_" +
        "it_needs_truncating.pptx"
      }
      shouldTruncate
    />
    <DocumentCardActivity
      activity="Created a few minutes ago"
      people={DocumentCardActivityPeople}
    />
  </DocumentCard>
);

export const Basic = Template.bind({});
Basic.args = {
  "aria-label":
    "Default Document Card with large file name. Created by Annie Lindqvist a few minutes ago.",
  onClickHref: "http://bing.com",
  type: 0,
};
