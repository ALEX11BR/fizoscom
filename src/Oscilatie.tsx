import React from 'react';
import { TableRow, TableCell, Input, InputAdornment, IconButton } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons'
import Graph from './Graph';

interface Props {
  osci: Osci,
  index: number
}

function Oscilatie(props: Props) {
  return (
    <TableRow>
        <TableCell>
          <b>{props.index+1}.</b><IconButton size="small"><DeleteForever /></IconButton>
        </TableCell>
        <TableCell>
          <Graph color={props.osci.color} height={100} fn={(a) => 50*Math.sin(a/10+5)} />
        </TableCell>
        <TableCell>
          <p>Amplitudine&nbsp;(A):
            <Input value={props.osci.amplitudine} endAdornment={<InputAdornment position="end">
              px
            </InputAdornment>} />
          </p>
          <p>Pulsație&nbsp;(ω):
            <Input value={props.osci.pulsatie} endAdornment={<InputAdornment position="end">
              rad/s
            </InputAdornment>} />
          </p>
          <p>Faza&nbsp;inițială&nbsp;(φ<sub>0</sub>):
            <Input value={props.osci.fazaInitiala} endAdornment={<InputAdornment position="end">
              rad
            </InputAdornment>} />
          </p>
        </TableCell>
    </TableRow>
  );
}

export default Oscilatie;