import { reactive } from "vue"

export const store = reactive({
    partialUrl: "https://db.ygoprodeck.com/api/v7/",
    offset: "?num=20&offset=0",
    midPoint: {
        cardInfo: "cardinfo.php/",
        archetypeUrl: "archetype.php/"
    },
    endPoint: {
        num: "20",
        offset: "0",
        archetype: "",
    },

    cardResponse: [],
    archetypeArray: [],
    // changeArchetype(arch) {
    //     if (arch === "") {
    //         this.archetype = "";

    //     } else {
    //         this.archetype = "&archetype=" + arch
    //         console.log('changed')
    //     }
    // }
})

