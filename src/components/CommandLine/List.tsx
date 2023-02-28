import { Heading } from "components/Typography";
import styled from "styled-components";
import { Command, CommandGroup } from "utils/commands";
import { Shortcut } from "./Shortcut";

const Root = styled.div`
  max-height: 290px;
  overflow: auto;
  padding: 6px 6px;
  border-top: 0.5px solid rgba(var(--color-gray-0), 0.1);
`;

const ItemList = styled.ul<{ selectedIndex: number }>`
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

const StyledHeading = styled(Heading)`
  color: rgba(var(--color-gray-0), 0.5);
  padding: 6px 12px;
`;

interface Props {
  selectedIndex: number;
  items: CommandGroup[];
}

export const List: React.FC<Props> = ({ selectedIndex, items }) => {
  let currentIndex = 0;

  return (
    <Root>
      <ItemList selectedIndex={selectedIndex}>
        {items.map(({ label, children }) => {
          return (
            <>
              {!!label && !!children.length && (
                <StyledHeading>{label}</StyledHeading>
              )}
              {children.map((c: Command) => {
                currentIndex += 1;
                const key = currentIndex - 1;

                return <Shortcut key={key} dataKey={key} command={c} />;
              })}
            </>
          );
        })}
      </ItemList>
    </Root>
  );
};
