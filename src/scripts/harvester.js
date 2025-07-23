import { barn } from "./storageBarn.js";

export const harvestPlants = (plants) => {
    const cropIcons = {
        "Asparagus": "🥦",      // Closest available emoji
        "Corn": "🌽",
        "Potato": "🥔",
        "Soybean": "🌱",        // Generic sprout
        "Sunflower": "🌻",
        "Wheat": "🌾"
};    

    let thisBarn = barn()    
    let id = 1
    plants.map((plant) => {
        let output = 0
        if (plant.type === "Corn") {
            output = plant.output/2
        } else {
            output = plant.output
        }
        for (let x = 0; x < output; x ++) {
        thisBarn.push({...plant, id, icon: cropIcons[plant.type]})
        id ++
    }
    })

    return thisBarn
}