<template>
  <v-app>
    <v-navigation-drawer class="bg-cyan-darken-4" theme="dark" permanent>
      <v-list-item link to="/" title="Inicio" prepend-icon="mdi-home"></v-list-item>
      <v-list-item link to="/productos" title="Productos" prepend-icon="mdi-cart"></v-list-item>
      <v-list-item link to="/lista-productos" title="Lista Productos" prepend-icon="mdi-format-list-bulleted"></v-list-item>
    </v-navigation-drawer>

    <v-main>
      <AppBar/>
      <router-view/>
    </v-main>

  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue';


export default {
  name: 'App',
  components: {
    AppBar
  },

  data: () => ({
    //
  }),
}
</script>
