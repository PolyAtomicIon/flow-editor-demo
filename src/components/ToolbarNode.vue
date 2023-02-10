<script setup>
import { NodeToolbar } from "@vue-flow/node-toolbar";
import { ref } from "vue";

defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const confirmDialog = ref(false);
const confirmAction = () => {
  console.log("confirm action");
  confirmDialog.value = true;
};
</script>

<template>
  <NodeToolbar
    :position="data.toolbarPosition"
    :is-visible="data.toolbarVisible"
  >
    <q-card flat bordered>
      <q-card-section>
        <q-btn @click="confirmAction" flat round color="red" icon="delete" />
        <q-btn flat round color="accent" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-section>
    </q-card>

    <!-- confirm action -->
    <q-dialog v-model="confirmDialog" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-icon name="warning" size="1.5rem" class="q-mr-sm" />
          <span class="q-ml-sm"
            >Are you sure you want to delete this item?</span
          >
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn disabled label="Delete" color="red" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </NodeToolbar>
</template>
