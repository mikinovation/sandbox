<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();

useHeadSafe({
  title: props.title,
});
</script>

<template>
  <TheContainer><slot /></TheContainer>
</template>

<script lang="ts">
import PageContainer from "./PageContainer.vue";

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  const { shallowMount } = await import("@vue/test-utils");

  it("renders content", () => {
    const wrapper = shallowMount(PageContainer, {
      props: {
        title: "Test Title",
      },
      slots: {
        default: "<div>Test Content</div>",
      },
    });

    expect(wrapper.text()).toBe("Test Content");
  });
}
</script>
