<template>
  <h1 ref="title"></h1>
</template>

<script>
export default {
  mounted() {
    this.$refs.title.innerText = this.$options.__file.split('/').pop()
  },
}
</script>