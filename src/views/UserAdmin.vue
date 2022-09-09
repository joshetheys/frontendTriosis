<template>
   


  <div class="container">
    <div class="row ">
      <div class="col-md">
        <router-link to="/adduser">
          <button class="btn btn-primary">Add New User</button>
        </router-link>
      </div>
    </div>
    <h2 class="display-2">Users</h2>
    <div class=" table-responsive">
      <table class="table table-hover">
        <thead class="bg-gradient">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Fullnames</th>
            <th scope="col">User role</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td data-title="ID">{{user.id}}</td>
            <td data-title="Fullnames">{{user.fullnames}}</td>
            <td data-title="User Role">{{user.userRole}}</td>
            <td data-title="Email">{{user.email}}</td>
            <td data-title="Password">{{user.userpassword}}</td>
            <td>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        :data-bs-target="'#updateUser'+user.id">
                        <i class="fas fa-edit"></i>
                    </button>
                    <ModalUsers :user="user" />
              <!-- <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button> -->
            <button type="button" class="btn btn-danger"  @click="this.$store.dispatch('deleteUser', user.id)"><i class="far fa-trash-alt"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>


  </div>
</template>

<script>
  import ModalUsers from "../components/ModalUsers.vue";
  export default {
  components:{ ModalUsers},
  props:['user'],
    computed:{
       
    users(){
    return this.$store.state.users;
   }
    },
    mounted(){
        this.$store.dispatch("getUsers");
    },

    methods: {
      editUser(){
             
              let newUser = { 
                fullnames: this.user.fullnames, 
                email: this.user.email,  
                userpassword: this.user.userpassword
            
              }
              this.$store.dispatch('editUser', newUser);
              document.getElementById(`editUser`+ this.user.id).click();
          },
        deleteUser() {
            console.log("User was deleted");
            this.$store.dispatch("deleteUser", this.user.id);
        }
    }

}
</script>

<style>
 
  </style>