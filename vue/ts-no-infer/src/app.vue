<script lang="ts" setup>
const items: {
  label: "Tab1" | "Tab2" | "Tab3";
  content: string;
}[] = [
  {
    label: "Tab1",
    content: "This is the content shown for Tab1",
  },
  {
    label: "Tab2",
    content: "And, this is the content for Tab2",
  },
  {
    label: "Tab3",
    content: "Finally, this is the content for Tab3",
  },
];
</script>

<template>
  <div class="container">
    <!-- Items include "Tab2" -->
    <TheTabs :items="items" selected="Tab2" />
    <!-- Items don't include "Tab4" -->
    <TheTabs :items="items" selected="Tab4" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
