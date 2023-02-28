import styled from "styled-components";
import { Text, VARIANT } from "components/Typography";

const Root = styled.div`
  margin: 0;
  background: rgb(var(--color-gray-0), 0.05);
  color: rgb(var(--color-gray-0), 0.5);
  border-radius: 4px;
  padding: 4px 8px;
`;

type Props = {
  children?: React.ReactNode;
};

export const Pill: React.FC<Props> = ({ children }) => (
  <Root>
    <Text as="div" variant={VARIANT.small}>
      {children}
    </Text>
  </Root>
);
