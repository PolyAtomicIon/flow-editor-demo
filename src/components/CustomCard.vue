<script setup>
import ToolbarNode from "./ToolbarNode.vue";
import { Handle, Position } from "@vue-flow/core";

defineProps({
  label: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <q-card flat bordered class="my-card">
    <q-card-section>
      <ToolbarNode :data="data" />
      <Handle type="target" class="handler" :position="Position.Top" />

      <div class="row items-center no-wrap">
        <!-- add cool icon here -->
        <q-icon name="home" size="1rem" class="q-mr-sm" />
        <span>{{ label }}</span>
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <div class="text-h6">{{ data.text }}</div>

      <img v-if="data.img" :src="data.img" />

      <q-uploader
        v-if="data.uploader"
        label="No thumbnails"
        color="amber"
        text-color="black"
        no-thumbnails
        style="max-width: 100%"
      />
    </q-card-section>

    <q-separator />

    <q-card-actions class="bg-grey-1 flex flex-end">
      <q-btn outline style="color: red" label="Action 1" />
      <q-btn flat>Action 2</q-btn>
    </q-card-actions>
  </q-card>
  <Handle type="source" class="handler" :position="Position.Bottom" />
</template>

<style>
.my-card {
  width: 100%;
  max-width: 250px;
}

.handler {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #113285;
}
</style>
