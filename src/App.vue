<template>
  <div class="loadingScreen d-flex flex-row justify-content-center align-items-center" v-show="!loaded">
    <h1>loading</h1>
  </div>
  <div class="allBg" v-show="loaded">
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
  </div>
</template>

<script>
import axios from 'axios'
import { store } from './data/store.js'
import MainComponent from './components/MainComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
export default {
  name: "App",
  data() {
    return {
      store,
      loaded: false,
      timeOut: '',
    };
  },
  methods: {
    fillStore() {
      axios
        .get(store.partialUrl + store.offset)
        .then((response) => {
          store.cardResponse = response.data.data;
          console.log(store.cardResponse);
          this.timeOut = setTimeout(this.timended(), 3000)
        })
        .catch(error => {
          console.log(error);
        });
    },
    timended() {
      clearTimeout(this.timeOut)
      this.loaded = true
    }
  },
  created() {
    this.fillStore();
  },
  components: { MainComponent, HeaderComponent, FooterComponent }
}
</script>

<style lang="scss" scoped></style>