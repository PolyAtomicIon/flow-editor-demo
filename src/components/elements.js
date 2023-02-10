import { MarkerType } from '@vue-flow/core'

/**
 * You can pass elements together as a v-model value
 * or split them up into nodes and edges and pass them to the `nodes` and `edges` props of Vue Flow (or useVueFlow composable)
 */
export const initialElements = [{
  id: '1',
  type: 'card',
  label: 'Node 1',
  position: { x: 250, y: -50 },
  class: 'light',
},
{
  id: '2',
  type: 'output',
  label: 'Node 2',
  position: { x: 100, y: 100 },
  class: 'light',
},
{
  id: 'e1-2',
  label: 'next steps',
  source: '1',
  target: '2',
  markerEnd: MarkerType.ArrowClosed,
},
]