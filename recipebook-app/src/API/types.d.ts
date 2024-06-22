interface Recipe {
    id: string,
    name: string,
    ingredients: string[],
    instructions: string,
    cuisineId: string,
    dietId: string;
    difficultyId: string,
    image: string
}

interface Comment {
    id: string,
    recipedId: string,
    comment: string,
    rating: string,
    date: string
}

interface Cuisine {
    id: string,
    name: string
}

interface Difficulty {
    id: string,
    name: string
}

interface Diet {
    id: string,
    name: string
}