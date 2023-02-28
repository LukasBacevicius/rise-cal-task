import styled from "styled-components";
import { Background } from "components/Background";
import { CommandLine } from "components/CommandLine";
import { GlobalStyles } from "styles/globalStyles";
import { ReactComponent as SvgSprite } from "icons/sprite.svg";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Background />
        <CommandLine />
      </Container>
      <SvgSprite />
    </>
  );
}

export default App;
