<template>
    <v-container :fluid="true">
       <h1 class="text-blue-grey-darken-2">Productos</h1>

       <v-form v-model="valid" ref="form">
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field v-model="producto.name" label="Nombre del Producto" :rules="[rules.required]" required></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
                <v-text-field v-model="producto.price" label="Precio" :rules="[rules.required, rules.number]" required></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
                <v-text-field v-model="producto.stock" label="Stock" :rules="[rules.required, rules.integer]" required></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
                <v-select v-model="producto.category" :items="categorias" label="Categoría" :rules="[rules.required]" required></v-select>
            </v-col>

            <v-col cols="12" md="6">
                <v-select v-model="producto.provider" :items="proveedores" label="Proveedor" :rules="[rules.required]" required></v-select>
            </v-col>

            <v-col cols="12">
                <v-btn @click="saveProduct" :disabled="!valid" color="primary">
                    Guardar Producto
                </v-btn>
            </v-col>
        </v-row>
       </v-form>
   </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default{
   name: 'ProductsView',
   data(){
    return {
        valid: false,
        producto: {
            name: '',
            price: 0,
            stock: 0,
            category: '',
            provider: '',
        },
        rules: {
            required: (value) => !!value || "Campo obligatorio.",
            number: (value) => !isNaN(parseFloat(value)) || "Debe ser un número.",
            integer: (value) => Number.isInteger(Number(value)) || "Debe ser un número entero.",
        },
    };
   },
   computed: {
    ...mapGetters(["getCategorias", "getProveedores"]),
    categorias(){
        return this.getCategorias;
    },
    proveedores(){
        return this.getProveedores;
    },
   },
   methods: {
    ...mapActions(["fetchCategorias", "fetchProveedores", "addProducto"]),
    saveProduct(){
        if (this.$refs.form.validate()){
            const productoClonado = JSON.parse(JSON.stringify(this.producto));
            console.log("Producto a guardar:", productoClonado);
            this.addProducto(productoClonado);
            this.$refs.form.reset();
            this.$refs.form.resetValidation();
        }
    },
   },
   mounted(){
    this.fetchCategorias();
    this.fetchProveedores();
   },
};
</script>