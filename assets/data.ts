export const calcObject = [
  {btn: 'c', id: 1, cls: 'clear'},
  {btn: '/', id: 2},
  {btn: '*', id: 3},
  {btn: '7', id: 4},
  {btn: '8', id: 5},
  {btn: '9', id: 6},
  {btn: '-', id: 7},
  {btn: '4', id: 8},
  {btn: '5', id: 9},
  {btn: '6', id: 10},
  {btn: '+', id: 11, cls: 'plus'},
  {btn: '1', id: 12},
  {btn: '2', id: 13},
  {btn: '3', id: 14},
  {btn: '0', id: 15},
  {btn: '00', id: 16},
  {btn: '.', id: 17},
  {btn: '=', id: 18, cls:'equal'},
]

export type RootObject = RootObjectChild[];

export interface RootObjectChild {
  btn: string;
  id: number;
  cls?: string
}
