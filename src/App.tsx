import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Graph from './Graph';

function App() {
  return (
    <Container>
      <Row><h1>Oscilație rezultantă</h1></Row>
      <Row >
        <Graph fn={(a: number) => 200*Math.sin(a/10)} height={200} color="#ffffff" id="1"/>
      </Row>
    </Container>
  );
}

export default App;
