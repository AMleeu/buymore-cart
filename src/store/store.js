// import Vue THEN Vuex
import Vue from "vue";
import Vuex from "vuex";
/*
    import images assets
*/
import headphones1 from "../assets/headphones1.webp";
import headphones2 from "../assets/headphones2.webp";
import headphones3 from "../assets/headphones3.webp";
import headphones4 from "../assets/headphones4.webp";

// initialize Vuex and tell Vue to use it
Vue.use(Vuex);

/* 
    create and export store
*/
const store = new Vuex.Store({
  state: {
    headphones: [
      {
        id: 1,
        name: "Beats Studio3",
        price: 6700,
        desc: "Beats Studio3 Wireless headphones deliver a premium listening experience with Pure Active Noise Cancelling (Pure ANC). Beats’ Pure ANC actively blocks external noise and uses real-time audio calibration to preserve clarity, range and emotion",
        imgUrl: headphones1,
      },
      {
        id: 2,
        name: "Sennheiser PXC 550-II",
        price: 6799,
        desc: "Created for the frequent traveller, the PXC 550-II Wireless from Sennheiser upgrades every journey with unrivalled sound quality and wireless freedom. Travel the world on a single charge with 30 hours of battery life: Listen to music, take calls, interact with AI assistants, or simply journey in tranquillity without distractions. Over-ear, Noise-Canceling,Bluetooth, Audiophile, Travel and Closed Headphone.",
        imgUrl: headphones2,
      },
      {
        id: 3,
        name: "Beats Solo Pro",
        price: 5999,
        desc: "Get inspired with Solo Pro wireless headphones. To deliver sound how you want it. Solo Pro features two listening modes: Active Noise Cancelling (ANC) and Transparency.",
        imgUrl: headphones3,
      },
      {
        id: 4,
        name: "Skullcandy Crusher",
        price: 2999,
        desc: "Skullcandy Crusher BT MOAB/Red",
        imgUrl: headphones4,
      },
    ],
    cartItemsCount: 0,
    cartItems: [],
  },
  getters: {
    headphones: (state) => state.headphones,
    cartItemsCount: (state) => state.cartItemsCount,
  },
  mutations: {
    addToCart(state, payload) {
      // create new item with an additional property of quantity:1
      let item = { ...payload, quantity: 1 };
      /*
        if cartItems is not empty, 
          check if the item is not already in cartItems 
            if it is, find its index and increase its quantity by 1
            else add it to cartItems
        else
          add it to cart items
        either way increment cartItemsCount by 1
      */
      if (state.cartItems.length > 0) {
        let isInCart = state.cartItems.some((i) => i.id === item.id);
        if (isInCart) {
          let itemIndex = state.cartItems.findIndex((i) => i.id === item.id);
          state.cartItems[itemIndex]["quantity"] += 1;
        } else {
          state.cartItems.push(item);
        }
      } else {
        state.cartItems.push(item);
      }
      state.cartItemsCount++;
    },
    removeFromCart(state, payload) {
      /*
        if cartItems in not empty 
          if item is in cart 
            find item index 
            if item's quantity is greater than 0
              decrease its quantity by 1
              & 
              decrement cartItemsCount by -1
            if item has a quantity of 0 remove it from cart
      */
      if (state.cartItems.length > 0) {
        let isInCart = state.cartItems.some((i) => i.id === payload.id);
        if (isInCart) {
          let itemIndex = state.cartItems.findIndex((i) => i.id === payload.id);
          if (state.cartItems[itemIndex]["quantity"] > 0) {
            state.cartItems[itemIndex]["quantity"] -= 1;
            state.cartItemsCount--;
          }
          if (state.cartItems[itemIndex]["quantity"] === 0) {
            state.cartItems.splice(itemIndex, 1);
          }
        }
      }
    },
  },
});

export { store };
