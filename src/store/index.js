import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [
            { name: 'black shirt', img: require('../assets/shirt2.jpg'), price: 50, qty: 1 },
            { name: 'white shirt', img: require('../assets/shirt3.jpg'), price: 20, qty: 1 },
            { name: 'designed shirt', img: require('../assets/shirt1.jpg'), price: 60, qty: 1 },
            { name: 'black shoe', img: require('../assets/shoe1.jpg'), price: 100, qty: 1 },
            { name: 'yellow shoe', img: require('../assets/shoe2.jpg'), price: 90, qty: 1 },
            { name: 'red shoe', img: require('../assets/shoe4.jpg'), price: 120, qty: 1 },
        ],
        productsCart: [],
              indexes: [],

    },
    mutations: {},
    actions: {},
    modules: {}
})