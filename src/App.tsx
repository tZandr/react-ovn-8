import './App.css';
import { useState } from 'react';
import type { RecipeData } from './types/RecipeData';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm'

const recipeList: RecipeData[] = [
  {
    id: 1,
    recipeName: 'Pannkakor',
    ingredients: 'Mjöl, mjölk, ägg, smör, salt',
    cookingTime: '15 min',
  },
  {
    id: 2,
    recipeName: 'Spaghetti Bolognese',
    ingredients: 'Spaghetti, köttfärs, tomatsås, lök, vitlök, kryddor',
    cookingTime: '30 min',
  },
  {
    id: 3,
    recipeName: 'Kycklinggryta',
    ingredients: 'Kyckling, grädde, curry, lök, buljong',
    cookingTime: '25 min',
  },
];

function App() {
  const [recipes, setRecipes] = useState<RecipeData[]>(recipeList);

  function addRecipe(recipe: Omit<RecipeData, 'id'>) {
    const newId = recipes.length + 1;

    setRecipes((prev: RecipeData[]) => [...prev, { ...recipe, id: newId }]);
  }

  return (
    <>
      <div id="root">
        <div className="header">
          <h2>React - Övning 8</h2>
          <p>Skapa och visa recept med controlled inputs</p>
        </div>
        <div className="assignment">
          <RecipeForm onAddRecipe={addRecipe} />
          <RecipeList recipes={recipes} />
        </div>
        <div>
          <small>Alexander Tjernström, IT-Högskolan JSU25</small>
        </div>
      </div>
    </>
  );
}

export default App;
