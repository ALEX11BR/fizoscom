import React, { useState } from 'react';
import { Grid, Paper, Table, TableBody, Button } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons'
import randomColor from 'randomcolor';

import Graph from './Graph';
import Oscilatie from './Oscilatie';

function App() {
  const [ oscilatii, setOscilatii ] = useState<Osci[]>([])
  function addOsci() {
    setOscilatii([ ...oscilatii, {
      color: randomColor(),
      amplitudine: oscilatii[0].amplitudine || 10,
      pulsatie: oscilatii[0].pulsatie || 1,
      fazaInitiala: oscilatii[0].fazaInitiala || 0
    }]);
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6}>
        <Paper>
          <Grid container justify="space-between" alignItems="baseline">
            <Grid item><h2>Oscilații de compus</h2></Grid>
            <Grid item><Button color="primary" onClick={addOsci} startIcon={<AddCircle />}>Adaugă</Button></Grid>
          </Grid>
          <Table>
            <TableBody>
              {oscilatii.map((oscilatie, index) => {
                return <Oscilatie osci={oscilatie} index={index}/>
              })}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper>
          <Grid container>
            <Grid item>
              <h2>Oscilație rezultantă</h2>
            </Grid>
          </Grid>
          <Graph fn={(a) => 100*Math.sin(a/10)} height={200} color="#ffffff" />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
