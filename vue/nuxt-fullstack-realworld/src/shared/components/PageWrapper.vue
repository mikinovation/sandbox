<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();

useHeadSafe({
  title: props.title,
});
</script>

<template>
  <div class="flex-2 mt-14 md:mt-12"><slot /></div>
</template>

<script lang="ts">
import PageWrapper from "./PageWrapper.vue";

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  const { shallowMount } = await import("@vue/test-utils");

  it("should render Your feed", async () => {
    const wrapper = shallowMount(PageWrapper);
    expect(wrapper.find("div").exists()).toBe(true);
  });
}
</script>
