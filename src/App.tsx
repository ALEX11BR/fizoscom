import React, { useState } from 'react';
import { Row, Col, Card } from 'antd';
import { BsPlusCircleFill } from 'react-icons/bs';
import randomColor from 'randomcolor';

import Graph from './Graph';
import Oscilatie from './Oscilatie';

function App() {
  const [ oscilatii, setOscilatii ] = useState<Osci[]>([])
  function addOsci() {
    setOscilatii([ ...oscilatii, {
      color: randomColor(),
      amplitudine: 10,
      pulsatie: 1,
      fazaInitiala: 0
    }]);
  };
  return (
    <Row>
      <Col>
        <Card title="Oscilații de compus" extra={
          <a href="#" onClick={addOsci}>Adaugă</a>
        }>
          {oscilatii.map((oscilatie, index) => {
            return <Oscilatie osci={oscilatie} index={index}/>
          })}
        </Card>
      </Col>
      <Col>
        <Card title="Oscilație rezultantă">
          <Graph fn={(a) => 100*Math.sin(a/10)} height={200} color="#ffffff" />
        </Card>
      </Col>
    </Row>
  );
}

export default App;
