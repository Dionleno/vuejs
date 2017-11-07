import Vue from 'vue'
import Router from 'vue-router'
import VueLocalStorage from 'vue-localstorage'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

 
Vue.use(Router)
Vue.use(VueLocalStorage)

var r = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
      meta: {requiresAuth: true}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
 
r.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth) { // check the meta field 
  	
    if(Vue.localStorage.get('token') != 'undefined') { // check if the user is authenticated
        next() // the next method allow the user to continue to the router 
    }
    else {
        next('/login') // Redirect the user to the main page
    }
}
else {
    next()
}
})

export default r;
