<template>
  <div class="home">
    <productCart />
  </div>
</template>

<script>
// @ is an alias to /src
import productCart from '@/components/productCart.vue'

export default {
  name: 'Home',
  components: {
    productCart
  }
}
</script>
