import { Box, Container, Panel, Row, SettingsIcon, Title } from "./styles";

export const FuelComponent = () => {
  return (
    <Container>
      <Title>Posto ReactJS</Title>
      <SettingsIcon />

      <Panel>
        <Row>
          <Box>Teste 1</Box>
          <Box>Teste 2</Box>
        </Row>
      </Panel>
    </Container>
  );
};
