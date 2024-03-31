<script lang="ts" setup></script>

<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nab-item">
                <a class="link nav-link active" href="">Your Feed</a>
              </li>
              <li class="nab-item">
                <a class="link nav-link" href="">Global Feed</a>
              </li>
              <li class="nab-item">
                <a class="link nav-link active" href="">
                  <i class="ion-pound" /> tag
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
