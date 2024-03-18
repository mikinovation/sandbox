<script lang="ts" setup>
console.log("Server Page 1 SSR");

const { data } = await useAsyncData(() => {
  console.log("Server Page 1 SSR data");
  return $fetch("https://jsonplaceholder.typicode.com/posts/1");
});

onMounted(() => {
  console.log("Server Page 1 mounted");
});
</script>

<template>
  <div>
    <h1>Server Page 1</h1>
    {{ data }}
  </div>
</template>
