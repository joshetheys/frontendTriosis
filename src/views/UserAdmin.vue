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
              <button type="button" class="btn btn-primary"><i class="far fa-eye"></i></button>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        :data-bs-target="'#update'+user.id">
                        <i class="fas fa-edit"></i>
                    </button>
              <!-- <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button> -->
            <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
<!-- Modal -->
    <div v-for="user in users" :key="user">
        <div class="modal fade" :id="'update'+user.id" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ user.fullnames }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input type="text" v-model="user.fullnames">
                        <input type="text" v-model="user.userRole">
                        <input type="text" v-model="user.email">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary"
                            @click="this.$store.dispatch('updateuser', user)">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
    computed:{
       
    users(){
    return this.$store.state.users;
   }
    },
    mounted(){
        this.$store.dispatch("getUsers");
    }

}
</script>

<style>
 
  </style>