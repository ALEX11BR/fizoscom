import React from 'react';
import { ListGroupItem, Col, Row, Button, InputGroup, FormControl } from 'react-bootstrap';
import { BsTrashFill } from 'react-icons/bs';

import { Osci, fnFromOsci } from './Osci';
import Graph from './Graph';

interface Props {
  osci: Osci,
  index: number,
  onDelete: () => void,
  onUpdate: (o: Osci) => void
}
function Oscilatie(props: Props) {
  const amplitudine = props.osci.amplitudine;
  const pulsatie = props.osci.pulsatie;
  const fazaInitiala = props.osci.fazaInitiala;

  const updateProp = (val: number, key: "amplitudine" | "pulsatie" | "fazaInitiala") => {
    props.onUpdate({
      ...props.osci,
      [key]: val
    })
  };
  return (
    <ListGroupItem>
      <Row>
        <Col xs={1}>
          <b>{props.index+1}.</b><br />
          <Button variant="danger" size="sm" onClick={props.onDelete}><BsTrashFill /></Button>
        </Col>
        <Col>
          <Graph color={props.osci.color} height={100} fn={fnFromOsci(props.osci)} />
        </Col>
        <Col>
          <Row><span>Amplitudine (A):</span>
            <InputGroup>
              <FormControl type="number" value={amplitudine} onChange={e => updateProp(parseFloat(e.target.value), "amplitudine")}></FormControl>
              <InputGroup.Append>
                <InputGroup.Text>px</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Row>
          <Row><span>Pulsație (ω):</span>
            <InputGroup>
              <FormControl type="number" value={pulsatie} onChange={e => updateProp(parseFloat(e.target.value), "pulsatie")}></FormControl>
              <InputGroup.Append>
                <InputGroup.Text>rad/s</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Row>
          <Row><span>Faza inițială (φ<sub>0</sub>):</span>
            <InputGroup>
              <FormControl type="number" value={fazaInitiala} onChange={e => updateProp(parseFloat(e.target.value), "fazaInitiala")}></FormControl>
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