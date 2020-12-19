<template>
  <div class="hello row">
    <div class="col-12 d-flex m-2 justify-content-between">
      <h1 class="ml-5">Products</h1>
      <router-link to="/cart">
        <b-button variant="primary" class="mr-5">Cart</b-button>
      </router-link>
    </div>
    <div class="col-lg-3 m-5" v-for="(product, index) in products" :key="index">
      <b-card
        :title="product.name"
        :img-src="product.img"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text>
          <h5># {{ product.price }}</h5>
        </b-card-text>

        <b-button href="#" variant="primary" @click="addToCart(index)"
          >Add to Cart</b-button
        >
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    productsCart() {
      return this.$store.state.productsCart;
    },
    indexes() {
      return this.$store.state.indexes;
    },
  },
  methods: {
    addToCart(index) {
      length = this.productsCart.length;
      var produce = this.products[index];

      if (length === 0) {
        this.productsCart.push(this.products[index]);
        this.indexes.push(index);
      } else {
        if (this.indexes.includes(index)) {
          console.log("sure");
          produce.qty++;
          // produce.price = produce.price * produce.qty;
        } else {
          this.indexes.push(index);
          this.productsCart.push(produce);
        }
      }
    },
  },
};
</script>

<style scoped></style>
