<template>
  <section class="navigation">
  <div class="nav-container">
    <div class="brand">
       <router-link :to="{ name: 'Home'}"> Home {{ new Date().getFullYear()}}</router-link>
    </div>
    <nav>
      <div class="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
      <ul class="nav-list">
        <li>
         <router-link :to="{ name: 'Login'}">Login </router-link>
        </li>
        <li>
         <router-link :to="{ name: 'SignUp'}"> Register </router-link>
        </li>
         <li>
         <router-link :to="{ name: 'SignUp'}"> User </router-link>
        </li>
     
      </ul>
    </nav>
  </div>
</section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../assets/css/navbar.css";
</style>