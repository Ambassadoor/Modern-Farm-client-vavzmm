export const processor = () => {
    let conveyorBelt = []
    return {
        enqueue: (crop) => {
            conveyorBelt.push(crop)
        },
        dequeue: () => {
            return conveyorBelt.splice(0,1)[0];
        },
        next: () => {
            return conveyorBelt[0]
        },
        last: () => {
            return conveyorBelt[conveyorBelt.length -1].type
        },
        isEmpty: () => {
            return conveyorBelt.length === 0
        },
        size: () => {
            return conveyorBelt.length
        }
    }
}