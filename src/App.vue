<script setup>
const getLink = (pageNo) => {
  // Note: pageNo 0 is the root page /
  return pageNo ? `/page${pageNo}` : '/'
}
</script>

<template>
  <RouterLink
    v-for="pageNo in [0, 1, 2]"
    :key="pageNo"
    :to="getLink(pageNo)"
    class="link"
  >
    {{ pageNo ? `Page ${pageNo}` : '/' }}
  </RouterLink>

  <RouterView v-slot="{ Component, route }">
    <!-- Doc: https://vueschool.io/lessons/route-transitions -->
    <transition :name="route.meta.transition || 'fade'" mode="out-in">
      <!-- Note: use key to force transition when navigating between similar component -->
      <component :is="Component" :key="route.path" />
    </transition>
  </RouterView>
</template>

<style scoped>
.link {
  background-color: darkgreen;
  border: solid 1px darkgray;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  padding: 10px;
  margin-right: 10px;
}

.link:hover {
  background-color: lightgreen;
  color: darkgreen;
}

/* Transition */
.fade-enter-active,
.fade-leave-active,
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}


</style>
