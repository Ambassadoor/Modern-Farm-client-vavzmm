import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { Catalog } from "./catalog.js";
import { processor } from "./processingFacility.js";

const yearlyPlan = createPlan();

console.log("Welcome to the main module")

plantSeeds(yearlyPlan)

const field = usePlants();

const food = harvestPlants(field); 

const foodArray = food.get()



const processedGoods = {
    "Soybean" : "Bean Paste",
    "Corn": "Corn meal",
    "Sunflower": "Sunflower oil",
    "Asparagus": "Pickled asparagus",
    "Wheat" : "Flour",
    "Potato" : "Potato chips"
}

const thisProcessor = processor();

let farmStore = []

while (!food.isEmpty() || !thisProcessor.isEmpty) {
    while (thisProcessor.size() <= 3) {
        thisProcessor.enqueue(food.pop())
        if (food.isEmpty()) {
            console.log("Storage Barn is ready for new crops")
        }
    }
    let nextItem = thisProcessor.dequeue()
    farmStore.push({
        ...nextItem, type: processedGoods[nextItem.type]
    })
}

console.log("Farm Store Inventory is full and ready to open for business")

farmStore.sort((a,b) => {
    if (a.type < b.type) {
        return -1
    }
    if (a.type > b.type) {
        return 1
    }
    return 0;   
})




Catalog(farmStore)

