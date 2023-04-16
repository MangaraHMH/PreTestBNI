<script>
import { RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
import Sidebar from './components/SideBar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: { Nav, Sidebar, Footer }
}
</script>

<template>
  <Nav />
  <Sidebar />
  <RouterView />
  <Footer />
</template>
