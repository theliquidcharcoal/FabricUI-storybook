import { Persona as FluentuiPersona, IPersonaProps } from "@fluentui/react";

export const Persona = ({ ...props }: IPersonaProps) => {
  return <FluentuiPersona {...props} />;
};
