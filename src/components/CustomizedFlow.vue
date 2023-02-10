<script setup>
import { VueFlow, isNode, useVueFlow } from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import { ref, reactive } from "vue";
import { initialElements } from "./elements.js";
import CustomCard from "./CustomCard.vue";

/**
 * useVueFlow provides all event handlers and store properties
 * You can pass the composable an object that has the same properties as the VueFlow component props
 */
const {
  onPaneReady,
  onNodeDragStart,
  onNodeDragStop,
  onConnect,
  zoomIn,
  zoomOut,
  setTransform,
  toObject,
  fitView,
  addEdges,
  applyNodeChanges,
} = useVueFlow();

/**
 * Our elements
 */
const elements = ref(initialElements);

/**
 * This is a Vue Flow event-hook which can be listened to from anywhere you call the composable, instead of only on the main component
 *
 * onPaneReady is called when viewpane & nodes have visible dimensions
 */
onPaneReady(({ fitView }) => {
  fitView();
});

/**
 * onConnect is called when a new connection is created.
 * You can add additional properties to your new edge (like a type or label) or block the creation altogether
 */
onConnect((params) => addEdges([params]));

const actions = ref([]);
const redoActions = ref([]);
let currentAction = reactive({});

onNodeDragStart((e) => {
  currentAction.id = e.node.id;
  currentAction.position = e.node.position;
});

onNodeDragStop((e) => {
  currentAction.newPosition = e.node.position;
  currentAction.type = e.node.type;
  currentAction.undo = () => {
    const node = elements.value.find((el) => el.id === currentAction.id);
    node.position = currentAction.position;
  };
  actions.value.push(currentAction);
  currentAction = {};
});

const undoAction = () => {
  const action = actions.value.pop();
  redoActions.value.push(action);
  elements.value = elements.value.map((element) => {
    if (element.id === action.id) {
      element.position = action.position;
    }
    return element;
  });
  applyNodeChanges(elements.value);
};

const redoAction = () => {
  const action = redoActions.value.pop();
  elements.value = elements.value.map((element) => {
    if (element.id === action.id) {
      element.position = action.newPosition;
    }
    return element;
  });
  applyNodeChanges(elements.value);
};

/**
 * Resets the current viewpane transformation (zoom & pan)
 */
const resetTransform = () => {
  setTransform({ x: 0, y: 0, zoom: 1.3 });
  fitView();
};

const logToObject = () => {
  console.log(toObject());
};
</script>

<template>
  <VueFlow
    v-model="elements"
    class="basicflow"
    :default-zoom="1.3"
    :min-zoom="0.2"
    :max-zoom="4"
  >
    <Background />
    <template #node-card="{ label, data }">
      <custom-card :label="label" :data="data" />
    </template>

    <div class="controls">
      <button
        style="background-color: #113285; color: white"
        @click="resetTransform"
      >
        reset transform
      </button>
      <button @click="logToObject">log toObject</button>

      <q-btn round dense color="primary" icon="add" @click="zoomIn" />
      <q-btn round dense color="primary" icon="remove" @click="zoomOut" />

      <q-btn
        round
        dense
        color="primary"
        icon="undo"
        @click="undoAction"
        :disable="actions.length === 0"
      />
      <q-btn
        round
        dense
        color="primary"
        icon="redo"
        @click="redoAction"
        :disable="redoActions.length === 0"
      />
    </div>
  </VueFlow>
</template>
