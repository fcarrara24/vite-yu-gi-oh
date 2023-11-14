<template>
  <div class="loadingScreen d-flex flex-row justify-content-center align-items-center" v-if="!loaded">
    <h1>loading</h1>
    <i class="fa-solid fa-spinner fa-spin"></i>
  </div>
  <div class="allBg" v-show="loaded">
    <HeaderComponent />
    <SelectComponent @changed-array="fillStore" />
    <MainComponent />
    <FooterComponent @refreshed-array="fillStore" />
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
    fillStore(archetype) {
      console.log(archetype)
      this.loaded = false;
      //creazione dell'archetipo 
      if (archetype !== "" && archetype !== null) {
        this.store.endPoint.archetype = archetype
      } else {
        this.store.endPoint.archetype = null
      }


      axios
        .get(store.partialUrl + store.midPoint.cardInfo, { params: store.endPoint })
        .then((response) => {
          store.cardResponse = response.data.data;

        })
        .catch(error => {
          console.log(error);
          if (offset >= 20) {
            store.offset -= 20
            fillStore(this.archetype)
          }
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
    //       response.data.data.forEach(element => {
    //         if (!storeArchetype.archeTypeResponse.includes(element.archetype)) {
    //           storeArchetype.archeTypeResponse.push(element.archetype)
    //         }
    //       });

    //     })
    //     .catch(error => {
    //       
    //     });
    // },
    loadArchetypeArray() {

      axios
        .get(store.partialUrl + store.midPoint.archetypeUrl)
        .then((res) => {
          store.archetypeArray = res.data.map((element) => {
            return element.archetype_name
          })
        })
      //console.log(store.archetypeArray);
    },
    timended() {
      clearTimeout(this.timeOut)
      this.loaded = true
    }
  },
  created() {
    // this.fillStore("");
    // this.loadArchetypeArray();
    Promise.all(this.fillStore(""), this.loadArchetypeArray())
      .then(() => {
        this.loaded = true
      })
    // this.loadArchetype();

  },

  components: { MainComponent, HeaderComponent, FooterComponent, SelectComponent }
}
</script>

<style lang="scss" scoped></style>