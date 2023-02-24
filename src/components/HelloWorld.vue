<script setup>
const getLink = (pageNo) => {
  return `Page${pageNo}`
}
</script>

<template>
  <RouterLink
    v-for="pageNo in [1, 2]"
    :key="pageNo"
    :to="getLink(pageNo)"
    class="link"
  >
    Page {{ pageNo }}
  </RouterLink>

  <RouterView />
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
</style>
