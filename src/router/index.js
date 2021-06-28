import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/friends/Home.vue'
import Createfriends from '../views/friends/Createfriends.vue'
import Editfriends from '../views/friends/Editfriends.vue'
import Detailfriends from '../views/friends/Detailfriends.vue'
import Groups from '../views/groups/Index.vue'

const routes = [
  {
    path: '/',
    name: 'friends.home',
    component: Home
  },
  {
    path: '/Createfriends',
    name: 'friends.create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createfriends 
  },
{
  path: '/editfriends/:id',
  name: 'Editfriends',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Editfriends
},
{
  path: '/detailfriends/:id',
  name: 'Detailfriends',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Detailfriends
},
{
  path: '/groups',
  name: 'groups.index',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Groups 
}
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
