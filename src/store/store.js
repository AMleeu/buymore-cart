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
import coffeeAppliances1 from "../assets/coffeeAppliances1.jpg";
import coffeeAppliances2 from "../assets/coffeeAppliances2.webp";
import coffeeAppliances3 from "../assets/coffeeAppliances3.jpg";
import coffeeAppliances4 from "../assets/coffeeAppliances4.jpg";

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
    coffeeAppliances: [
      {
        id: 1,
        name: "Delonghi Prima Donna Class ECAM550",
        price: 18999,
        desc: "Enjoy easy interaction of PrimaDonna Class thanks to the 3.5” colour display with touch controls which allows you to choose and personalise your drink and even setup your personal profile, all with a simple touch.",
        imgUrl: coffeeAppliances1,
      },
      {
        id: 2,
        name: "Milex Coffee Machine 1.8L",
        price: 1399,
        desc: "The Milex smart Coffee Maker has a slick, modern appearance with a stainless-steel finish, is compact and lightweight enough to suit any kitchen.",
        imgUrl: coffeeAppliances2,
      },
      {
        id: 3,
        name: "Philips Grind Brew Coffee Maker HD7762-0",
        price: 3999,
        desc: "The only Grind & Brew with two bean containers, with glass jug and Integrated coffee grinde",
        imgUrl: coffeeAppliances3,
      },
      {
        id: 4,
        name: "Russell Hobbs Espresso Maker RHVEM01",
        price: 2199,
        desc: "Cream Vintage Espresso Maker",
        imgUrl: coffeeAppliances4,
      },
    ],
  },
});

export { store };
