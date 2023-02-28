import { Pill } from "components/Pill";
import styled from "styled-components";

const Root = styled.div`
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

interface Props {
  query: string;
  setQuery: (val: string) => void;
}

export const SearchInput: React.FC<Props> = ({ query, setQuery }) => {
  return (
    <Root>
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
    </Root>
  );
};
