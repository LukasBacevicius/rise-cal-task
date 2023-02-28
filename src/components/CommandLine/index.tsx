import { useMemo, useState } from "react";
import styled from "styled-components";
import { SearchInput } from "./SearchInput";
import { List } from "./List";
import { CommandGroup, commands } from "utils/commands";
import { useKeyboardNavigation } from "hooks/useKeyboardNavigation";

const Root = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Wrapper = styled.div`
  margin-top: 150px;
  width: 100%;
  max-width: 641px;
  border-radius: 12px;
  background: rgba(var(--color-gray-90), 0.5);
  border: 0.5px solid rgba(var(--color-gray-0), 0.1);
  box-shadow: var(--default-shadow);
  backdrop-filter: blur(50px);
`;

const filterCommands = <T extends CommandGroup>(
  items: T[],
  query: string
): T[] => {
  return [...items].map((item) => ({
    ...item,
    children: [...item.children].filter((child) =>
      child.label.toLowerCase().includes(query.toLowerCase())
    ),
  }));
};

export const CommandLine: React.FC = () => {
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    if (!query) return commands;

    return filterCommands(commands, query);
  }, [query]);

  const [ref, selectedIndex] = useKeyboardNavigation(
    items.map((i) => i.children).flat()
  );

  return (
    <Root ref={ref}>
      <Wrapper>
        <SearchInput {...{ query, setQuery }} />
        <List {...{ selectedIndex, items }} />
      </Wrapper>
    </Root>
  );
};
