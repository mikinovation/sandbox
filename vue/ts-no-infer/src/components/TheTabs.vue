<script setup lang="ts" generic="T extends string">
const props = defineProps<{
  items: { label: T; content: string }[];
  selected: NoInfer<T>;
}>();

const selected = computed(() =>
  props.items.findIndex((item) => item.label === props.selected)
);
</script>

<template>
  <UTabs :items="items" :default-index="selected" />
</template>
