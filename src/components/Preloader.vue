<template>
  <div class="preloader-wrapper">
    <div class="preloader">
      <b-icon icon="bullseye" class="bullseye-icon"></b-icon>
      <b-icon icon="brightness-low" class="brightness-low-icon"></b-icon>
    </div>
  </div>
</template>

<style scoped>
.preloader-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
  z-index: 999;
}
.preloader{
  height:50px;
  animation-name: rotatePreloader;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.b-icon{
  margin:10px;
  animation-name: scaleIcons;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.bullseye-icon{
  width: 20px;
  height:20px;
  transform:scaleX(-1);
  color: #446e9b;
}
.brightness-low-icon{
  width: 45px;
  height: 45px;
  transform:scale(0);
  animation-delay: 0.58s;
}

@keyframes rotatePreloader {
  to{
    transform:rotate(360deg);
  }
}

@keyframes scaleIcons{
  50%{
    transform:scale(2.5);
  }
}
</style>
