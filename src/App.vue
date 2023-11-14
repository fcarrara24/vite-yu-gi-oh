<template>
  <div class="loadingScreen d-flex flex-row justify-content-center align-items-center" v-if="!loaded">
    <h1>loading</h1>
    <i class="fa-solid fa-spinner fa-spin"></i>
  </div>
  <div class="allBg" v-show="loaded">
    <HeaderComponent />
    <SelectComponent @changed-array="fillStore()" />
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
import SelectComponent from './components/SelectComponent.vue';
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
      this.loaded = false;

      axios
        .get(store.partialUrl + store.offset + store.archetype)
        .then((response) => {
          store.cardResponse = response.data.data;

        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.timeOut = setTimeout(this.timended(), 3000)
        }
        )
    },
    // loadArchetype() {
    //   axios
    //     .get(storeArchetype.Url)
    //     .then((response) => {
    //       console.log(response.data.data)
    //       response.data.data.forEach(element => {
    //         if (!storeArchetype.archeTypeResponse.includes(element.archetype)) {
    //           storeArchetype.archeTypeResponse.push(element.archetype)
    //         }
    //       });

    //       console.log(storeArchetype)
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // },
    timended() {
      clearTimeout(this.timeOut)
      this.loaded = true
    }
  },
  created() {
    this.fillStore();
    // this.loadArchetype();

  },

  components: { MainComponent, HeaderComponent, FooterComponent, SelectComponent }
}
</script>

<style lang="scss" scoped></style>