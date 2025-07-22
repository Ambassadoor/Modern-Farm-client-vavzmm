let field = [];

export const addPlant = (plant) => {
    if (Array.isArray(plant)) {
        field.push(...plant)
    } else {
        field.push(plant)
    }
}

export const usePlants = () => {
    return [...field]
}

