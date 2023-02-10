<script>
import CustomizedFlow from "./CustomizedFlow.vue";

export default {
  components: { CustomizedFlow },
};
</script>

<template>
  <div class="wrapper">
    <CustomizedFlow />
  </div>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}
</style>
