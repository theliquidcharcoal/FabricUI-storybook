import {
  SearchBox as FluentuiSearchBox,
  ISearchBoxProps,
} from "@fluentui/react";

export const SearchBox = ({ ...props }: ISearchBoxProps) => {
  return <FluentuiSearchBox {...props} />;
};
