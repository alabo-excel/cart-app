<template>
  <div class="hello">
    <div class="col-12 d-flex mt-2 justify-content-between">
      <h1 class="ml-5">Cart</h1>
      <router-link to="/">
        <b-button variant="primary" class="mr-5">Shop</b-button>
      </router-link>
    </div>
    <hr />
    <div class="row justify-content-center">
      <div class="col-lg-2 m-5" v-for="(productCart, index) in productsCart" :key="index">
       <b-badge
            id="badage"
            @click="removeItem(index)"
            class=""
            variant="danger"
            >X</b-badge
          >
        <b-card
          :img-src="productCart.img"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 10rem"
          class="mb-2"
        >
        
          <b-card-text>
            <h5>{{ productCart.name }}</h5>
            <p># {{ productCart.price }}</p>
            <p>qty = {{ productCart.qty }}</p>
            <div class="d-flex justify-content-between">
              <b-button @click="addProduct(index)" variant="primary" class="p-3"
                >+</b-button
              >
              <b-button @click="reduceProduct(index)" variant="primary" class="p-3"
                >-</b-button
              >
            </div>
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
  methods: {
    addProduct(index) {
      this.productsCart[index].qty++;
      this.productsCart[index].price =
        this.productsCart[index].price * this.productsCart[index].qty;
    },
    reduceProduct(index) {
      if (this.productsCart[index].qty === 1) {
        this.productsCart.splice(index);
      } else {
        this.productsCart[index].qty--;
        this.productsCart[index].price =
          this.productsCart[index].price * this.productsCart[index].qty;
      }
    },
    removeItem(index) {
      this.productsCart[index].price =
        this.productsCart[index].price / this.productsCart[index].qty;
      this.productsCart[index].qty = 1;
      this.productsCart.splice(index);
    },
  },
};
</script>

<style scoped>
#badage {
  position: relative;
  left: 60px;
  top: 20px;
  z-index: 100;
}
</style>
