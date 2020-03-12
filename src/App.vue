<template>

  <div id="app">
    <b-container>
    <nav>
        <router-link to = "/" ><img src="./assets/sendylogo.png" style="width:100px; height:100px;" ></router-link>

        <router-link to = "/" > Home </router-link>

        <router-link to = "/about" > About </router-link>

        
    </nav>
    </b-container>
    <router-view/>
   
 
  </div>
</template>

<script> 

export default {
  name: 'App',
  // components: {
  //   Thumbnails
  // }
}
</script>

<style >
nav {

padding: 30px 20px 20px 0;
}

</style>
