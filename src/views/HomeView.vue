<template>
    <v-container :fluid="true">
       <h1 class="text-blue-grey-darken-2">Inicio</h1>
       <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Informacion Personal</v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Nombre Completo</v-list-item-title>
                    <v-list-item-subtitle>{{ personalInfo.nombre }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Fecha de Nacimiento</v-list-item-title>
                    <v-list-item-subtitle>{{ personalInfo.fechaNacimiento }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Pasatiempos Favoritos</v-list-item-title>
                    <v-list-item-subtitle>
                      <ul>
                        <li v-for="(pasatiempo, index) in personalInfo.pasatiempos" :key="index">
                          {{ pasatiempo }}
                        </li>
                      </ul>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Películas y Lenguajes Favoritos</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-list-item-title>Películas Favoritas</v-list-item-title>
                  <v-list>
                    <v-list-item v-for="(pelicula, index) in personalInfo.peliculasFavoritas" :key="index">
                      <v-list-item-content>{{ pelicula }}</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>

                <v-col cols="12">
                  <v-list-item-title>Lenguajes de Programación Favoritos</v-list-item-title>
                  <v-list>
                    <v-list-item v-for="(lenguaje, index) in personalInfo.lenguajesFavoritos" :key="index">
                      <v-list-item-content>{{ lenguaje }}</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
       </v-row>
   </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default{
   name: 'HomeView',
   computed:{
    ...mapGetters(['getPersonalInfo']),
    personalInfo(){
      return this.getPersonalInfo;
    },
   },
}
</script>

<style scoped>
ul{
  list-style-type: none;
  padding: 0;
}
</style>