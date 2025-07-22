export const barn = () => {
    return {
        inventory: [],
        push: (item) => {
            return inventory.push(item)
        },
        pop: () => {
            return inventory.pop()
        },
        peek: () => {
            return inventory.peek()
        },
        isEmpty: () => {
            return inventory.isEmpty()
        }
    }     
}