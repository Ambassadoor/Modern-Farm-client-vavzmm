import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js";

export const plantSeeds = (plan) => {
    const seedFunctions = {
        "Asparagus": createAsparagus(),
        "Corn": createCorn(),
        "Potato": createPotato(),
        "Soybean": createSoybean(),
        "Sunflower": createSunflower(),
        "Wheat": createWheat(),
    }

    for (let row of plan) {
        for (let food of row) {
            let seed = seedFunctions[food]
            addPlant(seed);
        }
    }
}