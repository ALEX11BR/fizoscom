import React from 'react';
import SmoothieComponent, { TimeSeries } from 'react-smoothie';

interface Props {
    fn: (val: number) => number;
    id: string;
}

function Graph(props: Props) {
    var i=0;
    var line = new TimeSeries();
    setInterval(() => {
        line.append(Date.now(),props.fn(i++))
    }, 40);
    return (
        <SmoothieComponent series={[{
            data: line,
            strokeStyle: { g: 255 },
            lineWidth: 4,
        }]}/>
    );
}

export default Graph;