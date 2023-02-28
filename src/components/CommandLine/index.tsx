import { Pill } from "components/Pill";
import styled from "styled-components";
import {
  Command,
  CommandGroup,
  commands,
} from "components/CommandLine/commands";
import { Heading, Text, VARIANT } from "components/Typography";
import { useEffect, useMemo, useState } from "react";
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

const Top = styled.div`
  display: grid;
`;

const TargetItems = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px 16px 0;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.125rem;
  color: rgb(var(--color-gray-0));
  caret-color: rgb(var(--color-purple-60));
  padding: 20px;

  &:placeholder {
    color: rgba(var(--color-gray-0), 0.5);
  }
`;

const CommandListWrapper = styled.div`
  max-height: 299px;
  overflow: auto;
  padding: 6px 6px;
  border-top: 0.5px solid rgba(var(--color-gray-0), 0.1);
`;

const CommandList = styled.ul<{ selectedIndex: number }>`
  display: grid;
  margin: 0;
  padding: 0;
  display: grid;
  grid-gap: 4px;
  list-style-type: none;

  & > li:nth-of-type(${(props) => props.selectedIndex + 1}) {
    svg {
      color: rgba(var(--color-gray-0), 1);
    }

    &:after {
      opacity: 1;
    }
  }
`;

const CommandGroupHeading = styled(Heading)`
  color: rgba(var(--color-gray-0), 0.5);
  padding: 6px 12px;
`;

const Cmd = styled.li`
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

const Shortcut = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: end;
  color: rgba(var(--color-gray-0), 0.5);
`;

const Char = styled(Text)`
  width: 20px;
  height: 20px;
  background: rgba(var(--color-gray-0), 0.05);
  border-radius: 4px;
  display: grid;
  justify-content: center;
  align-items: center;
  color: rgba(var(--color-gray-0), 0.75);
`;

const filterCommands = <T extends CommandGroup>(
  items: T[],
  query: string
): T[] => {
  return [...items].map((item) => ({
    ...item,
    children: [...item.children].filter((child) =>
      child.label.toLowerCase().includes(query)
    ),
  }));
};

export const CommandLine: React.FC = () => {
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    if (!query) return commands;

    return filterCommands(commands, query);
  }, [query]);

  const handleCommandSelected = (command: any) => {
    alert(command.label);
  };

  const selectedIndex = useKeyboardNavigation(
    items.map((i) => i.children).flat(),
    handleCommandSelected
  );

  useEffect(() => {
    console.log(selectedIndex);
  }, [selectedIndex]);

  return (
    <Root>
      <Wrapper>
        <Top>
          <TargetItems>
            <Pill>
              <strong>Event </strong> - All hands on 15 Jan 2023
            </Pill>
          </TargetItems>

          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type command…"
            aria-label="Type command…"
            autoFocus
          />
        </Top>
        <CommandListWrapper>
          <CommandList selectedIndex={selectedIndex}>
            {items.map(({ label, children }) => (
              <>
                {!!label && !!children.length && (
                  <CommandGroupHeading>{label}</CommandGroupHeading>
                )}
                {children.map((c: Command) => (
                  <Cmd>
                    <svg viewBox="0 0 16 16">
                      <use href={c.icon} />
                    </svg>
                    <Text variant={VARIANT.medium}>{c.label}</Text>
                    <Shortcut>
                      {c.shortcut.map((s, index) =>
                        s.split("").map((char) => {
                          if (index !== 0) {
                            return (
                              <>
                                <Text variant={VARIANT.x_small}>then</Text>
                                <Char variant={VARIANT.x_small}>{char}</Char>
                              </>
                            );
                          }

                          return <Char variant={VARIANT.x_small}>{char}</Char>;
                        })
                      )}
                    </Shortcut>
                  </Cmd>
                ))}
              </>
            ))}
          </CommandList>
        </CommandListWrapper>
      </Wrapper>
    </Root>
  );
};
