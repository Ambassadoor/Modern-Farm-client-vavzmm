export const barn = () => {
    const inventory = []
    return {
        push: (item) => {
            return inventory.push(item)
        },
        pop: () => {
            return inventory.pop()
        },
        peek: () => {
            return inventory[inventory.length - 1]
        },
        isEmpty: () => {
            return inventory.length === 0
        },
        get: () => {
            return inventory
        }
    }     
}