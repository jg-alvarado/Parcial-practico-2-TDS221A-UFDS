<template>
    <v-container :fluid="true">
      <h1 class="text-blue-grey-darken-2">Lista de Productos</h1>
      <v-row>
        <v-col v-for="(producto, index) in productos" :key="index" cols="12" md="4">
          <v-card>
            <v-card-title>{{ producto.name }}</v-card-title>
            <v-card-subtitle>
              Precio: ${{ producto.price }}<br />
              Stock: {{ producto.stock }}<br />
              Categoría: {{ producto.category }}<br />
              Proveedor: {{ producto.provider }}
            </v-card-subtitle>
            <v-card-actions>
              <v-btn icon @click="removeProducto(producto.name)">
                <v-icon color="red">mdi-delete</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { mapGetters, mapActions } from "vuex";
  
  export default {
    name: "ProductListView",
    computed: {
      ...mapGetters(["getProductos"]),
      productos() {
        console.log("Productos obtenidos:", JSON.stringify(this.getProductos, null, 2));
        return this.getProductos;
      },
    },
    methods: {
      ...mapActions(["removeProducto"]),
    },
    mounted() {
      console.log("Productos obtenidos desde Vuex:", this.getProductos);
    },
  };
  </script>
  