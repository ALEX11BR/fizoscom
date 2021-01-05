import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

interface Props {
  osci: Osci
}

function Oscilatie(props: Props) {
  return <ListGroupItem>{props.osci.color}</ListGroupItem>
}

export default Oscilatie;