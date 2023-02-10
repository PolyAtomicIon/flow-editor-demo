import { MarkerType, Position } from '@vue-flow/core'

/**
 * You can pass elements together as a v-model value
 * or split them up into nodes and edges and pass them to the `nodes` and `edges` props of Vue Flow (or useVueFlow composable)
 */
export const initialElements = [{
  id: '1',
  type: 'input',
  label: 'Node 1',
  class: 'light',
  position: { x: 0, y: 0 },
}, {
  id: '2',
  type: 'card',
  label: 'Node 2',
  position: { x: 150, y: 150 },
  data: { toolbarPosition: Position.Top, text: 'Some text' },
}, {
  id: '3',
  type: 'card',
  label: 'With image',
  position: { x: -200, y: 150 },
  data: { toolbarPosition: Position.Right, img: 'https://picsum.photos/200/200' },
}, {
  id: '4',
  type: 'card',
  label: 'File uploader',
  position: { x: 0, y: 550 },
  data: { toolbarPosition: Position.Right, uploader: true },
},
{
  id: 'e1-2',
  source: '1',
  target: '2',
  markerEnd: MarkerType.ArrowClosed,
},
{
  id: 'e2-4',
  source: '2',
  target: '4',
  animated: true,
  markerEnd: MarkerType.ArrowClosed,
},
{
  id: 'e1-3',
  source: '1',
  target: '3',
  markerEnd: MarkerType.Arrow,
},
]