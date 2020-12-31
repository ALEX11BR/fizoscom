import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Graph from './Graph';

function App() {
  return (
    <Container>
      <Row>
        <Graph fn={(a: number) => Math.sin(a/10)} id="1"/>
      </Row>
    </Container>
  );
}

export default App;
