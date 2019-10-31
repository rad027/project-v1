<template>
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!--LOGGED USER-->
            <li v-if="$auth.check(1)" v-for="(route, key) in routes.user" v-bind:key="route.path" class="nav-item">
                <router-link  :to="{ name : route.path }" :key="key" exact class="nav-link">
                    <i :class="route.icon ? 'nav-icon fas fa-' + route.icon : 'far fa-circle nav-icon'"></i> 
                    {{route.name}}
                </router-link>
            </li>
            <!--LOGGED ADMIN-->
            <li v-if="$auth.check(2)" v-for="(route, key) in routes.admin" v-bind:key="route.path" :class="route.type != false ? 'nav-item' : 'nav-header'">
                <router-link v-if="route.type == true"  :to="{ name : route.path }" exact :key="key" class="nav-link">
                    <i :class="route.icon ? 'nav-icon fas fa-' + route.icon : 'far fa-circle nav-icon'"></i> 
                    {{route.name}}
                </router-link>
                <span v-else>{{ route.name }}</span>
            </li>
            <li class="nav-header">ACCOUNT</li>
            <!--LOGOUT-->
            <li v-if="$auth.check()" class="nav-item">
                <a href="#" @click.prevent="outNaAko" class="nav-link"> <i class="nav-icon fas fa-sign-out-alt"></i> Logout</a>
            </li>
        </ul>
</template>
<script>
  export default {
    data() {
      return {
        routes: {
          // LOGGED USER
          user: [
            {
              name: 'Dashboard',
              path: 'dashboard',
              icon : 'tachometer-alt'
            }
          ],
          // LOGGED ADMIN
          admin: [
            {
              name: 'Dashboard',
              path: 'admin.dashboard',
              icon : 'tachometer-alt',
              type : true
            },
            {
              name: 'PEOPLE',
              type : false
            },
            {
              name: 'Customers',
              path: 'people.customer',
              icon : 'user-tie',
              type : true
            },
            {
              name: 'Employees',
              path: 'people.employees',
              icon : 'users-cog',
              type : true
            },
            {
              name: 'All Contacts',
              path: 'people.contacts',
              icon : 'address-book',
              type : true
            },
          ]
        }
      }
    },
    mounted() {
      //
    },
    methods : {
      outNaAko : function(){
        var jeez = this;
        bconfirm("Are you sure you want to logout now ?",function(status){
          if(status){
            jeez.$toasted.success("You have successfully logged out. Thank you for using our Application.", { duration : 1500 });
            jeez.$auth.logout()
          }
        });
      }
    }
  }
</script>