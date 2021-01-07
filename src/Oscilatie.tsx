import React, { useState } from 'react';
import { ListGroupItem, Col, Row, Button, InputGroup, FormControl } from 'react-bootstrap';
import { BsTrashFill } from 'react-icons/bs';

import Graph from './Graph';

interface Props {
  osci: Osci,
  index: number,
  onDelete: () => void
}

function Oscilatie(props: Props) {
  const [ amplitudine, setAmplitudine ] = useState(props.osci.amplitudine);
  const [ pulsatie, setPulsatie ] = useState(props.osci.pulsatie);
  const [ fazaInitiala, setFazaInitiala ] = useState(props.osci.fazaInitiala);
  return (
    <ListGroupItem>
      <Row>
        <Col xs={1}>
          <b>{props.index+1}.</b><br />
          <Button variant="danger" size="sm" onClick={props.onDelete}><BsTrashFill /></Button>
        </Col>
        <Col>
          <Graph color={props.osci.color} height={100} fn={(a) => 50*Math.sin(a/10+5)} />
        </Col>
        <Col>
          <Row><span>Amplitudine (A):</span>
            <InputGroup>
              <FormControl type="number" value={amplitudine} onChange={e => setAmplitudine(parseFloat(e.target.value))}></FormControl>
              <InputGroup.Append>
                <InputGroup.Text>px</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Row>
          <Row><span>Pulsație (ω):</span>
            <InputGroup>
              <FormControl type="number" value={pulsatie} onChange={e => setPulsatie(parseFloat(e.target.value))}></FormControl>
              <InputGroup.Append>
                <InputGroup.Text>rad/s</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Row>
          <Row><span>Faza inițială (φ<sub>0</sub>):</span>
            <InputGroup>
              <FormControl type="number" value={fazaInitiala} onChange={e => setFazaInitiala(parseFloat(e.target.value))}></FormControl>
              <InputGroup.Append>
                <InputGroup.Text>rad</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Row>
        </Col>
      </Row>
    </ListGroupItem>
  );
}

export default Oscilatie;