import React from 'react';
import { ListGroupItem, Col, Row } from 'react-bootstrap';

import Graph from './Graph';

interface Props {
  osci: Osci,
  index: number
}

function Oscilatie(props: Props) {
  return (
    <ListGroupItem>
      <Row>
        {props.index}
      </Row>
      <Row>
        <Graph color={props.osci.color} height={100} fn={(a) => 50*Math.sin(a/10+5)} />
      </Row>
    </ListGroupItem>
  );
}

export default Oscilatie;