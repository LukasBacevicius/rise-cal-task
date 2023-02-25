import styled from "styled-components";

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
  background: rgba(38, 38, 38, 0.5);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 16px 70px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(50px);
`;

const Top = styled.div`
  padding: 16px;
`;

const Bottom = styled.div``;

export const CommandLine: React.FC = () => {
  return (
    <Root>
      <Wrapper>
        <Top />
        <Bottom />
      </Wrapper>
    </Root>
  );
};
