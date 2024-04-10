<script lang="ts" setup>
// TODO
</script>

<template>
  <div>TODO</div>
</template>

<script lang="ts">
import ArticleList from "./ArticleList.vue";

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  const { shallowMount } = await import("@vue/test-utils");

  it("should render Your feed", async () => {
    const wrapper = shallowMount(ArticleList);
    expect(wrapper.text()).toContain("TODO");
  });
}
</script>
