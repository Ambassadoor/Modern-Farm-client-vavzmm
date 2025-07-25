import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js";

const createSeed = (seed) => {
    const seedMap = {
        Asparagus: createAsparagus,
        Corn: createCorn,
        Potato: createPotato,
        Soybean: createSoybean,
        Sunflower: createSunflower,
        Wheat: createWheat
        }

    return seedMap[seed]();
    }

export const plantSeeds = (plan) => {

    const flatPlan = plan.flat();

    flatPlan.forEach((seed) => {
        addPlant(createSeed(seed))
    })
}
