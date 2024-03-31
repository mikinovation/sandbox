<template>
  <header>
    <nav class="navbar navbar-light">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">conduit</NuxtLink>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <NuxtLink class="nav-link active" a="test" to="/login"
              >Sign in</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">Sign up</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <slot />
  <footer>
    <div class="container">
      <NuxtLink class="logo-font" to="/">Home</NuxtLink>
      <span class="attributions">
        © {{ new Date().getFullYear() }} Mikihiro Saito. Code licensed under
        MIT.
      </span>
    </div>
  </footer>
</template>

<script lang="ts">
import Default from "./default.vue";

if (import.meta.vitest) {
  const { it, expect, vi } = import.meta.vitest;
  const { shallowMount, RouterLinkStub } = await import("@vue/test-utils");

  vi.setSystemTime(new Date("2024-03-31"));

  it("should render title", async () => {
    const wrapper = shallowMount(Default, {
      global: {
        stubs: {
          NuxtLink: RouterLinkStub,
        },
      },
    });
    expect(wrapper.find(".navbar-brand").text()).toBe("conduit");
  });

  it("should render Sign in link", async () => {
    const wrapper = shallowMount(Default, {
      global: {
        stubs: {
          NuxtLink: RouterLinkStub,
        },
      },
    });
    const link = wrapper.findAll("header .nav-link").at(0);
    expect(link.text()).toBe("Sign in");
    expect(link.attributes().to).toBe("/login");
  });

  it("should render Sign up link", async () => {
    const wrapper = shallowMount(Default, {
      global: {
        stubs: {
          NuxtLink: RouterLinkStub,
        },
      },
    });
    expect(wrapper.findAll("header .nav-link").at(1).text()).toBe("Sign up");
  });

  it("should render current year in footer", async () => {
    const wrapper = shallowMount(Default, {
      global: {
        stubs: {
          NuxtLink: RouterLinkStub,
        },
      },
    });
    expect(wrapper.find(".attributions").text()).toContain("2024");
  });
}
</script>
