//styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

//components
import Grid from './components/Grid.tsx'

const sampleRecipes = [
  {
    "id": "1",
    "name": "Spaghetti Carbonara",
    "ingredients": [
      "Spaghetti",
      "Eggs",
      "Parmesan Cheese",
      "Pancetta",
      "Black Pepper"
    ],
    "instructions": "Boil the spaghetti. Fry the pancetta. Mix eggs and cheese. Combine all.",
    "cuisineId": "1",
    "dietId": "3",
    "difficultyId": "3",
    "image": "/uploads/carbonara-horizontal-square640-v2.jpg"
  },
  {
    "id": "2",
    "name": "Margherita Pizza",
    "ingredients": [
      "Pizza Dough",
      "Tomato Sauce",
      "Mozzarella Cheese",
      "Basil",
      "Olive Oil"
    ],
    "instructions": "Prepare the dough. Spread tomato sauce. Add cheese and basil. Bake in the oven.",
    "cuisineId": "1",
    "dietId": "1",
    "difficultyId": "2",
    "image": "/uploads/Margherita-9920.webp"
  },
  {
    "id": "3",
    "name": "Tiramisu",
    "ingredients": [
      "Ladyfingers",
      "Mascarpone Cheese",
      "Coffee",
      "Cocoa Powder",
      "Sugar"
    ],
    "instructions": "Dip ladyfingers in coffee. Layer with mascarpone mixture. Dust with cocoa powder.",
    "cuisineId": "1",
    "dietId": "3",
    "difficultyId": "2",
    "image": "/uploads/tiramisu.jpg"
  },
  {
    "id": "4",
    "name": "Caesar Salad",
    "ingredients": [
      "Romaine Lettuce",
      "Caesar Dressing",
      "Croutons",
      "Parmesan Cheese",
      "Chicken Breast"
    ],
    "instructions": "Chop lettuce. Add dressing, croutons, and cheese. Top with grilled chicken.",
    "cuisineId": "2",
    "dietId": "2",
    "difficultyId": "1",
    "image": "/uploads/Caesar-Salad.webp"
  }
]

function App() {

  return (
    <>
      <Grid recipes={sampleRecipes} />
    </>
  )
}

export default App
