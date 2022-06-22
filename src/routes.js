import Home from "./components/Home";
import ItemDetails from "./components/ItemDetails";

export default [
  { path: "/", component: Home },
  { path: "/item-details/:item", name: "item-details", component: ItemDetails },
];
