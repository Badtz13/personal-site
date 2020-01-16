<template>
  <main id="app" class="bg-blue-100">
    <div class="flex w-auto bg-blue-800">
      <router-link to="/" class="px-4 py-2 text-white hover:text-blue-200">Home</router-link>
      <router-link to="/about" class="px-4 py-2 text-white hover:text-blue-200 pl-0">About</router-link>
      <router-link to="/blog" class="px-4 py-2 text-white hover:text-blue-200 pl-0">Blog</router-link>
    </div>
    <router-view/>
  </main>
</template>

<style>
html,body,#app{
  height: 100%;
}
</style>
