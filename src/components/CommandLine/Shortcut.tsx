import { VARIANT, Text } from "components/Typography";
import styled from "styled-components";
import { Command } from "utils/commands";
import { Keys } from "./Keys";

interface Props {
  dataKey: string | number;
  command: Command;
}

const Root = styled.li`
  display: grid;
  padding: 12px 14px;
  grid-template-columns: 16px 1fr minmax(20px, 72px);
  grid-gap: 16px;
  color: rgb(var(--color-gray-0));
  position: relative;
  align-items: center;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(var(--color-gray-0), 0.05);
    opacity: 0;
    border-radius: 6px;
  }

  svg {
    color: rgba(var(--color-gray-0), 0.6);
  }
`;

export const Shortcut: React.FC<Props> = ({ dataKey, command }) => (
  <Root data-key={dataKey}>
    <svg viewBox="0 0 16 16">
      <use href={command.icon} />
    </svg>
    <Text variant={VARIANT.medium}>{command.label}</Text>
    <Keys keys={command.shortcutUI} />
  </Root>
);
