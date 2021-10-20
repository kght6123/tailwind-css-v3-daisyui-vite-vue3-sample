<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/organisms/Header.vue";
import Carousel from "./components/organisms/Carousel.vue";
import BlogItemList from "./components/organisms/BlogItemList.vue";
import Hero from "./components/organisms/Hero.vue";
import Footer from "./components/organisms/Footer.vue";
</script>

<template>
  <Header class="fixed w-screen z-10" />
  <Carousel />
  <BlogItemList />
  <div class="divider"></div>
  <Hero />
  <div class="divider"></div>
  <Footer />
  <!--img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /-->
</template>
