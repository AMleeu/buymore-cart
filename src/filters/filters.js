const formatPrice = function (price) {
  return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

export { formatPrice };
