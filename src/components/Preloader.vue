<template>
  <div class="preloader-wrapper">
    <b-icon icon="cart" class="cart-icon"></b-icon>
    <b-icon icon="cart" class="cart-icon"></b-icon>
    <b-icon icon="cart" class="cart-icon"></b-icon>
  </div>
</template>

<style scoped>
.preloader-wrapper {
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
  z-index: 999;
}
.cart-icon{
  height: 775px;
  width: 75px;
  transform: rotate(180deg);
  font-size: 1px;
  padding: 1px;
  color: #446e9b;
  margin-right: 5px;
  margin-left: 5px;
  transform: rotateX(180deg);
}
.cart-icon:nth-child(1){
    animation: floorcrossright 10s infinite;
}
.cart-icon:nth-child(2){
    margin-top:-10vh;
    animation: floorcrossleft 10s infinite;
}
.cart-icon:nth-child(3){
    margin-top:-25vh;
    animation: spin 5s infinite;
}

@keyframes floorcrossleft {
  0% {
    transform: translateX(-100vw);
  }
  100% {
    transform: translateX(100vw);
  }
}
@keyframes floorcrossright {
  0% {
    transform: translateX(100vw);
    transform: rotate(180deg,180deg);
  }
  100% {
    transform: translateX(-100vw);
  }
}
@keyframes spin {
  0% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(370deg);
    opacity:0;
  }
}
</style>
