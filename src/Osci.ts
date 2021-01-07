export interface Osci {
  color: string;
  amplitudine: number;
  pulsatie: number;
  fazaInitiala: number;
}

export function fnFromOsci(osci: Osci) {
    return (i: number) => osci.amplitudine*Math.sin(osci.fazaInitiala + osci.pulsatie*i*40/1000);
}