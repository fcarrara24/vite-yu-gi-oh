import { reactive } from "vue"

export const store = reactive({
    partialUrl: "https://db.ygoprodeck.com/api/v7/",
    offset: "?num=20&offset=0",
    midPoint: {
        cardInfo: "cardinfo.php/",
        archetypeUrl: "archetypes.php"
    },
    endPoint: {
        num: "20",
        offset: "0",
        archetype: "",
    },

    cardResponse: [],
    archetypeArray: [],

})

