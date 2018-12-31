<template>
  <section class="welcome">
    <h1>{{ title }}</h1>
    <p v-if="description !== ''">{{ description }}</p>
  </section>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    title: {
      type: String,
      default: 'Welcome'
    },
    description: {
      type: String,
      default: ''
    },
  },
  mounted () {
    console.log('Component mounted.')
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-transform: uppercase;
  font-size: 5rem /* 80/16 */;
}
p {
  font-weight: 300;
  font-size: 1.25rem /* 20/16 */;
}
</style>
