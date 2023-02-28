import styled from "styled-components";
import { Background } from "components/Background";
import { CommandLine } from "components/CommandLine";
import { GlobalStyles } from "styles/globalStyles";
import { ReactComponent as SvgSprite } from "icons/sprite.svg";
import { commands } from "utils/commands";
import { useHotkeys } from "reakeys";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const hotkeys = commands
  .map((c) => c.children)
  .flat()
  .map((h) => {
    return {
      name: h.label,
      keys: h.shortcut.toLowerCase(),
      callback: h.callback,
    };
  });

function App() {
  useHotkeys(hotkeys);

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
