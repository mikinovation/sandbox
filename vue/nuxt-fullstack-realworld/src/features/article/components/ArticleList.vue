<script lang="ts" setup>
import { type Article } from "@/features/article/model";

const props = defineProps<{
  articles: Article[];
  articlesCount: number;
  currentPage: number;
}>();
</script>

<template>
  <div
    v-for="article in props.articles"
    :key="article.id"
    class="article-preview"
  >
    <div class="article-meta">
      <a>
        <image :src="article.author.image" />
      </a>
      <span class="date">{{ formatDate(article.createdAt) }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import ArticleList from "./ArticleList.vue";

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  const { shallowMount } = await import("@vue/test-utils");

  it("should render Your feed", async () => {
    const wrapper = shallowMount(ArticleList);
    expect(wrapper.findAll(".nav-link").at(0)?.text()).toBe("Your Feed");
  });
}
</script>
