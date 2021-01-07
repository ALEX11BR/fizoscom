import React from 'react';
import { Row, Col, List, Button, Tooltip } from 'antd';
import { AiOutlineClose } from 'react-icons/ai';

import Graph from './Graph';

interface Props {
  osci: Osci,
  index: number
  onDelete: () => void
}

function Oscilatie(props: Props) {
  return (
    <List.Item>
      <Row>
        <Col xs={1}>
          <Tooltip title="Șterge oscilația">
            <Button onClick={props.onDelete} danger type="primary" shape="circle" icon={
              <AiOutlineClose />
            }/>
          </Tooltip>
        </Col>
        <Col>
          <Graph color={props.osci.color} height={100} fn={(a) => 50*Math.sin(a/10+5)} />
        </Col>
        <Col>
          <Row><span>Amplitudine (A):</span></Row>
          <Row><span>Pulsație (ω):</span></Row>
          <Row><span>Faza inițială (φ<sub>0</sub>):</span></Row>
        </Col>
      </Row>
    </List.Item>
  );
}

export default Oscilatie;