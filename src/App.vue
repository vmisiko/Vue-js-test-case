<template>

  <div id="app">
    <Navbar class="top-fix"/>
    <b-container class="mb-5">
    
    </b-container>

    <router-view/>
   
    <div class="footer text-center">
      <p>
        @2020 , Designed & Developed by Victor Misiko
      </p>
    </div>
  </div>
  
</template>

<script> 

import Navbar from "./components/Navbar.vue"

export default {
  name: 'App',
  components: {
    Navbar
  }
}

</script>


<style >

nav {

padding: 30px 20px 20px 0;

}

.top-fix {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  
}
.footer {
  background: #123;
  color:white;
  padding:20px;
}
</style>
