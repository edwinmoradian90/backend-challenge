import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 70vw;
`;

const ToggleContent = styled.div`
  display: ${(props) => (props.condition ? "block" : "none")};
`;

export { Container, ToggleContent };
