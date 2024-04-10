<script setup lang="ts">
// TODO: Add constant title
</script>

<template>
  <PageContainer title="Home">
    <div
      class="jumbotron w-full flex justify-center items-center text-center p-4 overflow-auto text-white bg-custom-green shadow-inner"
    >
      <TheContainer>
        <h1
          class="font-titillium text-6xl font-extrabold text-center text-shadow pb-4"
        >
          conduit
        </h1>
        <p class="font-thin text-xl pb-4">A place to share your knowledge.</p>
      </TheContainer>
    </div>
  </PageContainer>
</template>

<style scoped>
.text-shadow {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.jumbotron {
  box-shadow: inset 0 8px 8px -8px rgba(0, 0, 0, 0.3),
    inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3);
}
</style>

<script lang="ts">
import IndexPage from "./index.vue";

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  const { shallowMount } = await import("@vue/test-utils");

  it("should render Your feed", async () => {
    const wrapper = shallowMount(IndexPage);
    expect(wrapper.findAll(".nav-link").at(0)?.text()).toBe("Your Feed");
  });

  it("should render Global Feed", async () => {
    const wrapper = shallowMount(IndexPage);
    expect(wrapper.findAll(".nav-link").at(1)?.text()).toBe("Global Feed");
  });

  it("should render Tag", async () => {
    const wrapper = shallowMount(IndexPage);
    expect(wrapper.findAll(".nav-link").at(2)?.text()).toBe("tag");
  });
}
</script>
