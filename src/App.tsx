import React, { useState } from 'react';
import { Row, Col, Card, List, Button, Tooltip } from 'antd';
import { AiOutlinePlus } from 'react-icons/ai';
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
  function deleteOsci(index: number) {
    setOscilatii([
      ...oscilatii.slice(0,index),
      ...oscilatii.slice(index+1)
    ]);
  };
  return (
    <Row>
      <Col xs={24} lg={12}>
        <Card>
          <Row justify="space-between">
            <Col><h2>Oscilații de compus</h2></Col>
            <Col>
              <Tooltip title="Adaugă oscilație">
                <Button onClick={addOsci} type="primary" shape="circle" icon={
                  <AiOutlinePlus />
                }/>
              </Tooltip>
            </Col>
          </Row>
          <List bordered>
            {oscilatii.map((oscilatie, index) => {
              return <Oscilatie osci={oscilatie} index={index} onDelete={() => deleteOsci(index)}/>
            })}
          </List>
        </Card>
      </Col>
      <Col xs={24} lg={12}>
        <Card>
          <h2>Oscilație rezultantă</h2>
          <Graph fn={(a) => 100*Math.sin(a/10)} height={200} color="#ffffff" />
        </Card>
      </Col>
    </Row>
  );
}

export default App;
