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
        name: "Beats Studio3 Wireless Headphones - Matt Black",
        price: 6700,
        desc: "Beats Studio3 Wireless headphones deliver a premium listening experience with Pure Active Noise Cancelling (Pure ANC). Beats’ Pure ANC actively blocks external noise and uses real-time audio calibration to preserve clarity, range and emotion",
        imgUrl: headphones1,
      },
      {
        id: 2,
        name: "Sennheiser PXC 550-II Travel BT Wireless headphones Black",
        price: 6799,
        desc: "Created for the frequent traveller, the PXC 550-II Wireless from Sennheiser upgrades every journey with unrivalled sound quality and wireless freedom. Travel the world on a single charge with 30 hours of battery life: Listen to music, take calls, interact with AI assistants, or simply journey in tranquillity without distractions. Over-ear, Noise-Canceling,Bluetooth, Audiophile, Travel and Closed Headphone.",
        imgUrl: headphones2,
      },
      {
        id: 3,
        name: "Beats Solo Pro Wireless Noise Cancelling Headphones - Grey",
        price: 5999,
        desc: "Get inspired with Solo Pro wireless headphones. To deliver sound how you want it. Solo Pro features two listening modes: Active Noise Cancelling (ANC) and Transparency.",
        imgUrl: headphones3,
      },
      {
        id: 4,
        name: "Skullcandy Crusher Wireless Immersive Bass Headphonesy",
        price: 2999,
        desc: "Skullcandy Crusher BT MOAB/Red",
        imgUrl: headphones4,
      },
    ],
  },
});

export { store };
