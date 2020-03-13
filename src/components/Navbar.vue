<template>
<div>
  <b-navbar toggleable="lg" type="light" variant="info">
    <b-navbar-brand> <router-link to = "/" ><img src="../assets/xyz.png" style="width:100px; height:50px;" ></router-link>
</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>

        <b-nav-item  > <router-link to ="/" > <p class= "nav-color">Home</p>  </router-link></b-nav-item>
        <b-nav-item  > <router-link to ="/about/0/" > <p class= "nav-color">About</p>  </router-link></b-nav-item>

      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    
</template>

<script>
export default {
    name:"Navbar"
}
</script>

<style scooped>
.nav-color{
  text-decoration: none;
  color:white
}


.nav-color:link {
  color: red;
}

/* visited link */
.nav-color:visited {
  color: green;
}

/* mouse over link */
.nav-color:hover {
  color:purple;
}

/* selected link */
.nav-color:active {
  color: blue;
}
</style>