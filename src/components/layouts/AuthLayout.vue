<template>
  <div>
    <main class="main">
      <slot />
    </main>
    <footer />
  </div>
</template>

<script>
import Footer from "../common/Footer.vue";
export default {
  components: { Footer },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  min-height: 100vh;
  background: url('https://thumbs.dreamstime.com/z/back-to-school-doodle-seamless-pattern-drawing-background-lineart-design-vector-illustration-152202793.jpg');
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

@keyframes move {
  0% {
    transform: translate(-15px, 0px);
  }
  50% {
    transform: translate(0px, -15px);
  }
  100% {
    transform: translate(-15px, 0px);
  }
}

.triangle1 {
  position: absolute;
  left: 50%;
  top: -180px;
  transform: translate(-50%);
  width: 400px;
  z-index: -1;
  opacity: 0.7;
}
.triangle2 {
  position: absolute;
  left: -50px;
  top: 50%;
  transform: translateY(-50%);
  width: 400px;
  z-index: -1;
  opacity: 0.7;
}
.circle {
  position: absolute;
  right: -180px;
  bottom: -300px;
  width: 500px;
  z-index: -1;
  opacity: 0.5;
}
</style>
