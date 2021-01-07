import React, { useState } from 'react';
import { Container, ListGroup, Row, Col } from 'react-bootstrap';
import { BsPlusCircleFill } from 'react-icons/bs';
import randomColor from 'randomcolor';

import { fnFromOsci, Osci } from './Osci';
import Graph from './Graph';
import Oscilatie from './Oscilatie';

function App() {
  const [ oscilatii, setOscilatii ] = useState<Osci[]>([])
  function addOsci() {
    setOscilatii([ ...oscilatii, {
      color: randomColor(),
      amplitudine: oscilatii[0] ? oscilatii[0].amplitudine : 10,
      pulsatie: oscilatii[0] ? oscilatii[0].pulsatie : 1,
      fazaInitiala: oscilatii[0] ? oscilatii[0].fazaInitiala : 0
    }]);
  };
  function deleteOsci(index: number) {
    setOscilatii([
      ...oscilatii.slice(0,index),
      ...oscilatii.slice(index+1)
    ]);
  };
  function composedFn(i: number) {
    var r = 0;
    for (var oscilatie of oscilatii) {
      r+=fnFromOsci(oscilatie)(i);
    }
    return r;
  };
  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={6}>
          <h1>Oscilații de compus</h1>
          <ListGroup className={"listgroup"}>
            {oscilatii.map((oscilatie, index) => {
              return (
                <Oscilatie
                  key={index}
                  index={index}
                  osci={oscilatie}
                  onDelete={() => deleteOsci(index)}
                  onUpdate={(o: Osci) => setOscilatii([
                    ...oscilatii.slice(0,index),
                    o,
                    ...oscilatii.slice(index+1)
                  ])}
                />
              );
            })}
            <ListGroup.Item className="addbutton" action active onClick={addOsci}><BsPlusCircleFill /> Adaugă oscilație nouă</ListGroup.Item>
          </ListGroup>
          <hr />
        </Col>
        <Col xs={12} lg={6}>
          <h1>Oscilație rezultantă</h1>
          <Graph fn={composedFn} height={200} color="#ffffff" />
          <hr />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
