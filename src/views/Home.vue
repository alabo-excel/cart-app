<template>
  <div class="home">
    <products />
  </div>
</template>

<script>
// @ is an alias to /src
import products from '@/components/products.vue'

export default {
  name: 'Home',
  components: {
    products
  }
}
</script>
<style>
  body{
    overflow-x: hidden;
  }
</style>