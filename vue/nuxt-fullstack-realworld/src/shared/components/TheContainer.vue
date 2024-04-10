<template>
  <div class="container"><slot /></div>
</template>

<style scoped>
.container {
  margin-top: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

@media (min-width: 544px) {
  .container {
    max-width: 576px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 940px;
  }
}
</style>

<script lang="ts">
import TheContainer from "./TheContainer.vue";

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  const { shallowMount } = await import("@vue/test-utils");

  it("renders content", () => {
    const wrapper = shallowMount(TheContainer, {
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
