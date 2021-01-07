import React from 'react';
import SmoothieComponent, { TimeSeries } from 'react-smoothie';

interface Props {
  fn: (val: number) => number,
  height: number,
  color: string
}

function Graph(props: Props) {
  var i=0;
  var line = new TimeSeries();
  setInterval(() => {
    line.append(Date.now(), props.fn(i++))
  }, 40);
  return (
   <SmoothieComponent height={props.height} responsive maxValue={props.height/2} minValue={-props.height/2} series={[{
     data: line,
     strokeStyle: props.color,
     lineWidth: 4,
   }]}/>
  );
}

export default Graph;