import React, { useState } from 'react';
import { Row, Col, List, Button, Tooltip, InputNumber } from 'antd';
import { AiOutlineClose } from 'react-icons/ai';

import Graph from './Graph';

interface Props {
  osci: Osci,
  index: number
  onDelete: () => void
}

function Oscilatie(props: Props) {
  const [ amplitudine, setAmplitudine ] = useState(props.osci.amplitudine);
  const [ pulsatie, setPulsatie ] = useState(props.osci.pulsatie);
  const [ fazaInitiala, setFazaInitiala ] = useState(props.osci.fazaInitiala);
  return (
    <List.Item>
      <Row gutter={16} align="middle">
        <Col xs={2}>
          <Tooltip title="Șterge oscilația">
            <Button onClick={props.onDelete} danger type="primary" shape="circle" icon={
              <AiOutlineClose />
            }/>
          </Tooltip>
        </Col>
        <Col xs={16}>
          <Graph color={props.osci.color} height={100} fn={(a) => 50*Math.sin(a/10+5)} />
        </Col>
        <Col xs={6}>
          <div>Amplitudine (px):<br /><InputNumber defaultValue={amplitudine} onChange={n => setAmplitudine(Number(n))} /></div>
          <div>Pulsație (rad/s):<br /><InputNumber  defaultValue={pulsatie} onChange={n => setPulsatie(Number(n))} /></div>
          <div>Faza inițială (rad):<br /><InputNumber defaultValue={fazaInitiala} onChange={n => setFazaInitiala(Number(n))} /></div>
        </Col>
      </Row>
    </List.Item>
  );
}

export default Oscilatie;