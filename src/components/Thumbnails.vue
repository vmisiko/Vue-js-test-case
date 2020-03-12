<template>
  <div class="thumbnail">
    
      <b-container>
      <b-row>
       <div v-for="(data, index) in details" :key="index" >
 <!-- card for thumbnail profile  -->
          <div  class="card mx-3 my-2">

            <router-link v-bind:to = "'/about/'+ index" ><img :src="data.src" alt="Avatar" style="width:225px; height:225px;" > </router-link>

            <div class="container">

             <router-link  v-bind:to = "'/about/'+ index" class="name-tag" > <h4><b> {{ data.name }} </b></h4></router-link>

              <router-link  v-bind:to = "'/about/'+ index" class="department-tag"> <p > {{ data.department }} </p> </router-link>

            </div>

        </div>

       </div>
      </b-row>
      </b-container>
      

    
    </div>
</template>

<script>
export default {
  name: 'Thumbnails',
  data()  {
    
    return{
      image:"./assets/logo.jpg",
      details: [
         {
                    id: 1,
                    name: "Victor Misiko",
                    department:"Software Engineering",
                    email:"victormisiko.vm@gmail.com",
                    contact: "071649416",
                    src:require("../assets/avatar.png"),

                },
                {
                    id: 2,
                    name: "Nixon Ndiwa",
                    department:"Software Engineering",
                    contact: "071649416",
                    email: "nixon@gmail.com",
                    src:require("../assets/avatar.png"),

                },
                {
                    id: 3,
                    name: "Becky Wanja",
                    department:"Software Engineering",
                    contact: "071649416",
                    email: "becky@gmail.com",
                    src:require("../assets/lady.png"),

                },
                {
                    id: 4,
                    name: "Denis Makokha",
                    department:"Project Manager",
                    contact: "071649416",
                    email: "denis@gmail.com",
                    src:require("../assets/avatar.png"),

                },
                {
                    id: 5,
                    name: "Caleb Wafula",
                    department:"Software Engineering",
                    contact: "071649416",
                    email: "caleb@gmail.com",
                    src:require("../assets/avatar.png"),

                },
                {
                    id: 6,
                    name: "Lucia Robi",
                    department:"Software Engineering",
                    contact: "071649416",
                    email: "caleb@gmail.com",
                    src:require("../assets/lady.png"),

                },
                {
                    id: 7,
                    name: "Kohen Onyango",
                    department:"Sales & Marketing",
                    contact: "071649416",
                    email: "caleb@gmail.com",
                    src:require("../assets/avatar.png"),

                },
                {
                    id: 8,
                    name: "Grace Nelson",
                    department:"E-Commerce",
                    contact: "071649416",
                    email: "caleb@gmail.com",
                    src:require("../assets/lady.png"),

                },
                {
                    id: 9,
                    name: "Phiona Arwings",
                    department:"Server Admin",
                    contact: "071649416",
                    email: "caleb@gmail.com",
                    src:require("../assets/lady.png"),

                },
                {
                    id: 5,
                    name: "Zippy oraDMT",
                    department:"Graphic Designer",
                    contact: "071649416",
                    email: "caleb@gmail.com",
                    src:require("../assets/lady.png"),

                }
  
      ]
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.thumbnail {
  align-items:left ;
  padding:0;
}

 
img:hover {

      box-shadow: 0px 4px 5px grey;
      border-radius: 5px 5px 0 0;

      }
 




.card {
  box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2)
}

.container {
  padding: 5px 16px;
}

.container h4:hover,
.container p:hover  {
  color:blueviolet;
}
.name-tag{
  text-decoration: none;
}
.department-tag {
  color:#f57f20;
  text-decoration: none;
}

</style>
