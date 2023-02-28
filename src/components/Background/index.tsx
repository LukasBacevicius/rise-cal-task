import styled from "styled-components";

interface Props {
  width?: string | number;
  height?: string | number;
}

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Box = styled.div<Props>`
  border-radius: 24px;
  width: ${(props) => props.width ?? 0}px;
  height: ${(props) => props.height ?? 0}px;
  position: absolute;
`;

const GreenBox = styled(Box)`
  background-color: rgb(var(--color-green-80));
  top: 105px;
  left: 100px;
`;

const GrayBox = styled(Box)`
  background-color: rgb(var(--color-gray-80));
  bottom: 105px;
  right: 240px;
`;

export const Background = () => {
  return (
    <Root>
      <GreenBox width={264} height={251} />
      <GrayBox width={199} height={296} />
    </Root>
  );
};
