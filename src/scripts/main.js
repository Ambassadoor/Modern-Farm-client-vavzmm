import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { Catalog } from "./catalog.js";

const yearlyPlan = createPlan();

console.log("Welcome to the main module")

plantSeeds(yearlyPlan)

const field = usePlants();

const food = harvestPlants(field); 
console.log(food)

food.sort((a,b) => {
    if (a.type < b.type) {
        return -1
    }
    if (a.type > b.type) {
        return 1
    }
    return 0;   
})



Catalog(food)

