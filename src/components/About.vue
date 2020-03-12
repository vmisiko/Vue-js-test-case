<template>
<div class="about">
    <b-container v-if=" Number(their_name) < 10">
    <!-- <h1>Victor Misiko</h1> -->
    <b-row>
        <!-- #first column -->
        <b-col  >
            <!-- #first row for this first column  -->
            <div class = "card py-3 px-3 ">
                <b-row >
                    <b-col class="">
                        <h3>
                            {{ details[Number(their_name)].name  }}
                        </h3>
                        <blockquote >
                            <em class="text-muted">Department: {{ details[Number(their_name)].department }}</em> &nbsp;
                        </blockquote>
                    
                        <hr>

                        <div>
                            <h5> contacts</h5>
                            <div class="ml-4">
                                <h5 class="text-muted">
                                    <b-icon icon="envelope"></b-icon> Email
                                </h5>
                                <span class="ml-2"> {{details[Number(their_name)].email}} </span>
                                <h5 class="text-muted">
                                    <b-icon icon="phone"></b-icon> Phone Number
                                </h5>
                                <span class="ml-2">{{details[Number(their_name)].contact}}</span>



                            </div>

                        </div>
                        
                    </b-col>

                    <b-col>
                        <img class="profile-pic" v-bind:src = "details[Number(their_name)].src" style="width:225; height:225px;" alt="Update profile picture">

                        <img class="ml-5" src="../assets/sendylogo.png" style="width:70; height:70px;" alt="">
                    </b-col>
                   


                    
                </b-row>
                
            </div>

            <!-- SECOND ROW For THIS column 1  -->
            <div class = "card mt-5 py-3 px-3 ">
                        <h3> Timeline View actions for {{ details[Number(their_name)].name }} </h3>    
                      
                        
                    </div>

        </b-col>
    
       <!-- #second colummn  -->
       <b-col>
           <div class="card">
               <h1 class="timeline-header">
                    Timeline Activities
                </h1>   

                <div class="timeline ">
                    <p >
                        Added landing page to the site
                        <br>

                        <span>1 month ago</span> 
                    </p>
                    <p>
                        Added landing page to the site
                        <br>

                        <span>1 month ago</span> 
                    </p>
                    <p>
                        Added landing page to the site
                        <br>

                        <span>1 month ago</span> 
                    </p>
                    <p>
                        Added landing page to the site
                        <br>

                        <span>1 month ago</span> 
                    </p>
                    <p>
                        Added landing page to the site
                        <br>

                        <span>1 month ago</span> 
                    </p>
                    
                    
                </div>
                <!-- <div class="timeline">
                    <p>
                        Added landing page to the site
                        <br>

                        <span>1 month ago</span> 
                    </p>
                    
                    
                </div>
                <div class="timeline">
                    <p>
                        Added landing page to the site
                        <br>

                        <span>1 month ago</span> 
                    </p>
                    
                    
                </div>
                <div class="timeline">
                    <p>
                        Added landing page to the site
                        <br>

                        <span>1 month ago</span> 
                    </p>
                    
                    
                </div>
                <div class="timeline">
                    <p>
                        Added landing page to the site
                        <br>

                        <span>1 month ago</span> 
                    </p>
                    
                    
                </div> -->
           </div>

       </b-col>
        

    </b-row>
            
            </b-container>
        </div>
        
</template>

<script>
export default {
    name: "About",
    data (){
        return{

            their_name: this.$route.params.name,
            src:require("../assets/images.png"),
            details: [
                {
                    id: 1,
                    name: "victor Misiko",
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

<style scoped>
p {
    padding:5px;
    border-left: 5px solid #2EB3Fc;
    margin-bottom: 2px;
    font-size: 20px;
    color: #3E5252;
    border-bottom:0.02px solid rgba(0, 0, 0, 0.1);

}
span:hover ,
p:hover {
    background: rgb(1,1,1,0.1);
    color:#f57f20;
}
.card {
  box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
}
.profile-pic{
    border-radius:50%;


}
blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 1rem;
    border-left: 5px solid #e0e0e0;
   
}
blockquote:hover{
     background: cornsilk;
}
img:hover {
     box-shadow: 0px 4px 5px #2EB3Fc;
}
.timeline-header{
    width: 100%;
    background-color:#0083c0;
    padding: 20px;
    border-bottom:1px solid #123;
    color: white;


} 
span {
    font-size: 14px;
    color: #6c757d;
}

</style>

