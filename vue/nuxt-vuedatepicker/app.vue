<script lang="ts" setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const date = ref(new Date());
</script>

<template>
  <VueDatePicker v-model="date">
    <template #clear-icon="{ clear }">
      <button @click="clear">Clear</button>
    </template>
  </VueDatePicker>
</template>
