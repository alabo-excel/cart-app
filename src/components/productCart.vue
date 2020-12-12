<template>
  <div class="hello">
    <div class="col-12 d-flex mt-2 justify-content-between">
      <h1 class="ml-5">Cart</h1>
      <router-link to="/">
        <b-button variant="primary" class="mr-5">Shop</b-button>
      </router-link>
    </div>
    <hr>
    <div class="row justify-content-center">
      <div
        class="col-lg-2 m-5"
        v-for="productCart in productsCart"
        :key="productCart.name"
      >
        <b-card
          :title="productCart.name"
          :img-src="productCart.img"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 10rem"
          class="mb-2"
        >
          <b-card-text>
            <h5># {{ productCart.price }}</h5>
            <p>qty = {{productCart.qty}}</p>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    productsCart() {
      return this.$store.state.productsCart;
    },
  },
};
</script>

<style scoped></style>
