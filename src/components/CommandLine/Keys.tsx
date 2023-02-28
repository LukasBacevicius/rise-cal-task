import { VARIANT, Text } from "components/Typography";
import styled from "styled-components";

const Root = styled.div`
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

interface Props {
  keys: string;
}

export const Keys: React.FC<Props> = ({ keys }) => {
  return (
    <Root>
      {keys.split("+").map((s) => {
        return s.split("").map((char, index) => {
          if (char === " ") {
            return (
              <Text
                key={`${index}_then`}
                variant={VARIANT.x_small}
                data-testid="then"
              >
                then
              </Text>
            );
          }

          return (
            <Char
              key={`${index}_${char}`}
              variant={VARIANT.x_small}
              data-testid="char"
            >
              {char}
            </Char>
          );
        });
      })}
    </Root>
  );
};
