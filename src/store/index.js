
import { createStore } from 'vuex'

export default createStore({
  state: {
    personalInfo:{
      nombre: 'José Gil Alvarado Hernández',
      fechaNacimiento: '14-06-2004', // Cambia la fecha a la tuya
      pasatiempos: ['Ver peliculas, Programar, Jugar videojuegos'],
      peliculasFavoritas: ['Spider-Man', 'Terminator 2: el juicio final', 'Batman: el caballero de la noche'],
      lenguajesFavoritos: ['JavaScript', 'Python', 'C#'],
    },
    productos: [],
    categorias: [],
    proveedores: [],
  },
  getters: {
    getPersonalInfo: (state) => state.personalInfo,
    getProductos: (state) => state.productos,
    getCategorias: (state) => state.categorias,
    getProveedores: (state) => state.proveedores,
  },
  mutations: {
    SET_CATEGORIAS(state, categorias){
      state.categorias = categorias;
    },
    SET_PROVEEDORES(state, proveedores){
      state.proveedores = proveedores;
    },
    ADD_PRODUCTO(state, producto){
      console.log("Producto recibido por Vuex:", producto);
      state.productos.push({ ...producto });
    },
    REMOVE_PRODUCTO(state, productoName){
      state.productos = state.productos.filter(producto => producto.name !== productoName);
    },
  },
  actions: {
    fetchCategorias({commit}){
      const categorias = ['Electrodomesticos', 'Tecnologia', 'Ropa'];
      commit('SET_CATEGORIAS', categorias);
    },
    fetchProveedores({commit}){
      const proveedores = ['Amazon', 'eBay', 'Walmart'];
      commit('SET_PROVEEDORES', proveedores);
    },
    addProducto({commit}, producto){
      commit('ADD_PRODUCTO', producto);
    },
    removeProducto({commit}, productoName){
      commit('REMOVE_PRODUCTO', productoName);
    },
  },
  modules: {
  }
})
