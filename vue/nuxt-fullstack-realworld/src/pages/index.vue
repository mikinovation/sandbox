<script setup lang="ts">
// TODO: Add constant title

const articles = ref([]);
const tags = ref([]);
const tagLoading = ref(false);
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
      <TheContainer>
        <div class="flex md:space-x-4">
          <div class="md:w-3/4 mr-4">
            <!-- TabbedMenu -->
            <p v-if="articles.length === 0">Loading articles...</p>
            <div v-else>
              <p v-if="articles.length === 0">No articles are here... yet.</p>
              <!-- TODO: ArticleList -->
              <!-- TODO: Pagination -->
            </div>
          </div>
        </div>

        <div class="md:w-1/4 mt-2">
          <div class="sidebar p-3 rounded bg-gray-100">
            <p class="mb-2 text-sm font-medium">Popular Tags</p>
            <p v-if="tagLoading">Loading tags...</p>
            <ul v-else-if="tags.length > 0" class="tag-list list-none">
              <li
                v-for="tag in tags"
                :key="tag"
                class="tag-default tag-pill tag-outline"
              >
                <NuxtLink to="/">
                  <span
                    class="border border-gray-300 text-xs py-0.5 whitespace-nowrap inline-block px-2.5 rounded-full text-white bg-gray-400"
                  >
                    {{ tag }}
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
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
