import { reactive } from "vue"

export const store = reactive({
    partialUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    offset: "?num=20&offset=0",
    archetype: "",
    cardResponse: [],
    changeArchetype(arch) {
        if (arch === "") {
            this.archetype = "";

        } else {
            this.archetype = "&archetype=" + arch
            console.log('changed')
        }
    }
})

export const storeArchetype = reactive({
    Url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?",
    archeTypeResponse: [],
})