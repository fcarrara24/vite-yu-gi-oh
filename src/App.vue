<template>
  <div>
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
    };
  },
  methods: {
    fillStore() {
      axios
        .get(store.partialUrl + store.offset)
        .then((response) => {
          store.cardResponse = response.data.data;
          console.log(store.cardResponse);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.fillStore();
  },
  components: { MainComponent, HeaderComponent, FooterComponent }
}
</script>

<style lang="scss" scoped></style>