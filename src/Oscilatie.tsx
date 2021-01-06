import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Graph from './Graph';

interface Props {
  osci: Osci,
  index: number
}

function Oscilatie(props: Props) {
  return (
    <TableRow>
        <TableCell>
          <b>{props.index+1}.</b>
        </TableCell>
        <TableCell>
          <Graph color={props.osci.color} height={100} fn={(a) => 50*Math.sin(a/10+5)} />
        </TableCell>
        <TableCell>
          <p>Amplitudine&nbsp;(A):</p>
          <p>Pulsație&nbsp;(ω):</p>
          <p>Faza&nbsp;inițială&nbsp;(φ<sub>0</sub>):</p>
        </TableCell>
    </TableRow>
  );
}

export default Oscilatie;