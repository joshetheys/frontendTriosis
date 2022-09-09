<template>
   
<div v-if="user">

<div class="container">
  
  <h2 class="display-2">User Profile</h2>
  <div class=" table-responsive">
    <table class="table table-hover">
      <thead class="bg-gradient">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Fullnames</th>
          <th scope="col">User role</th>
          <th scope="col">Email</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td data-title="ID">{{user.id}}</td>
          <td data-title="Fullnames">{{user.fullnames}}</td>
          <td data-title="User Role">{{user.userRole}}</td>
          <td data-title="Email">{{user.email}}</td>          <td>
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
</div>

<div style=" height: 100vh; display: flex; justify-content: center; align-self: center;" v-else >
    <div style="display: flex; justify-content: center; align-self: center">

      <img src="https://i.postimg.cc/SxX9g01J/loading.gif" style="width: 100%; height: auto"/>

    </div>
  </div>
  </template>
  
  <script>
    import ModalUsers from "../components/ModalUsers.vue";
    export default {
      
    components:{ ModalUsers},
     props:['user'],
      computed:{
         
      user(){
      return this.$store.state.user;
     }
      },
      // mounted(){
      //     this.$store.dispatch("getUser", this.id);
      // },
  
      methods: {
        editUser(){
               
                let newUser = { 
                  fullnames: this.fullnames, 
                  email: this.email,  
                  userpassword: this.userpassword
              
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